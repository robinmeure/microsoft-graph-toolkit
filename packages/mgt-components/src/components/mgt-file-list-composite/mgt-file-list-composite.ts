import { customElement, mgtHtml, Providers } from '@microsoft/mgt-element';
import { DriveItem } from '@microsoft/microsoft-graph-types';
import { html, nothing, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import { OfficeGraphInsightString } from '../../graph/types';
import { BreadcrumbInfo } from '../mgt-breadcrumb/mgt-breadcrumb';
import { MgtFileListBase } from '../mgt-file-list/mgt-file-list-base';
import { strings } from './strings';
import '../mgt-file-grid/mgt-file-grid';
import { Command } from '../mgt-menu/mgt-menu';
import { clearFilesCache, deleteDriveItem, renameDriveItem, shareDriveItem } from '../../graph/graph.files';
import { styles } from './mgt-file-list-composite-css';
import { fluentButton, fluentDialog, fluentTextField } from '@fluentui/web-components';
import { registerFluentComponents } from '../../utils/FluentComponents';
import { MgtFileGrid } from '../mgt-file-grid/mgt-file-grid';

registerFluentComponents(fluentButton, fluentDialog, fluentTextField);

/**
 * FileListBreadCrumb interface
 */
type FileListBreadCrumb = {
  // tslint:disable: completed-docs
  name: string;
  fileListQuery?: string;
  itemId?: string;
  itemPath?: string;
  files?: DriveItem[];
  fileQueries?: string[];
  groupId?: string;
  driveId?: string;
  siteId?: string;
  userId?: string;
  insightType?: OfficeGraphInsightString;
  fileExtensions?: string[];
  // tslint:enable: completed-docs
} & BreadcrumbInfo;

const alwaysRender = () => true;

/**
 * A File list composite component
 * Provides a breadcrumb navigation to support folder navigation
 *
 * @class MgtFileComposite
 * @extends {MgtTemplatedComponent}
 */
@customElement('file-list-composite')
class MgtFileListComposite extends MgtFileListBase {
  /**
   * Array of styles to apply to the element. The styles should be defined
   * using the `css` tag function.
   */
  static get styles() {
    return styles;
  }

  /**
   * Strings to be used in the component
   *
   * @readonly
   * @protected
   * @memberof MgtFileList
   */
  protected get strings() {
    return strings;
  }
  constructor() {
    super();
    this.breadcrumbRootName = strings.rootNode;
    this.commands = [
      {
        id: 'share-edit',
        name: 'Create editable link',
        onClickFunction: this.showShareFileEditable,
        shouldRender: alwaysRender
      },
      {
        id: 'share-read',
        name: 'Create read-only link',
        onClickFunction: this.showShareFileReadOnly,
        shouldRender: alwaysRender
      },
      { id: 'rename', name: 'Rename', onClickFunction: this.showRenameFileDialog, shouldRender: alwaysRender },
      { id: 'delete', name: 'Delete', onClickFunction: this.showDeleteDialog, shouldRender: alwaysRender },
      { id: 'download', name: 'Download', onClickFunction: this.downloadFile, shouldRender: f => !f.folder }
    ];
  }

  /**
   * Name to be used for the root node of the breadcrumb
   *
   * @type {string}
   * @memberof MgtFileComposite
   */
  @property({
    attribute: 'breadcrumb-root-name'
  })
  public breadcrumbRootName: string;

  /**
   * Switch to use grid view instead of list view
   *
   * @type {boolean}
   * @memberof MgtFileListComposite
   */
  @property({
    attribute: 'use-grid-view',
    type: Boolean
  })
  public useGridView: boolean;

  /**
   * Helper function to set properties of a give breadcrumb to match the current state of the component
   *
   * @param c {FileListBreadCrumb}
   */
  private updateBreadcrumb(c: FileListBreadCrumb) {
    c.siteId = this.siteId;
    c.groupId = this.groupId;
    c.driveId = this.driveId;
    c.userId = this.userId;
    c.files = this.files;
    c.fileExtensions = this.fileExtensions;
    c.fileListQuery = this.fileListQuery;
    c.fileQueries = this.fileQueries;
    c.itemPath = this.itemPath;
    c.insightType = this.insightType;
    c.itemId = this.itemId;
  }

  /**
   * Override connectedCallback to set initial breadcrumbstate.
   *
   * @memberof MgtFileList
   */
  public connectedCallback(): void {
    super.connectedCallback();
    const rootBreadcrumb: FileListBreadCrumb = {
      name: this.breadcrumbRootName,
      id: 'root-item'
    };
    this.updateBreadcrumb(rootBreadcrumb);
    // console.log('rootBreadcrumb', rootBreadcrumb);
    this.breadcrumb.push(rootBreadcrumb);
  }

  /**
   * Implemented to overcome React wrapping challenges
   *
   * @param changedProperties
   */
  protected updated(changedProperties: PropertyValueMap<this> | Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    // Update the last item in the breadcrumb to the current state
    // Necessary as React wrapped component don't set properties on the initial render
    // this casues connectecCallback logic to be called before properties are set
    const currentBreadcrumb = this.breadcrumb[this.breadcrumb.length - 1];
    this.updateBreadcrumb(currentBreadcrumb);
  }

  /**
   * An array of nodes to show in the breadcrumb
   *
   * @type {BreadcrumbInfo[]}
   * @readonly
   * @memberof MgtFileList
   */
  @state()
  private breadcrumb: FileListBreadCrumb[] = [];

  @state()
  private _activeFile: DriveItem;

  @state()
  private deleteDialogVisible = false;

  @state()
  private renameDialogVisible = false;

  @state()
  private shareDialogVisible = false;

  @state()
  private shareMode: 'edit' | 'view' = 'view';

  @state()
  private shareUrl: string;

  /**
   * Render the component
   *
   * @return {*}
   * @memberof MgtFileComposite
   */
  public render() {
    return html`
      <a id="file-link" style="display:none"  target="_blank"></a>
      ${this.renderBreadcrumb()}
      ${this.renderFiles()}
      ${this.renderDeleteDialog()}
      ${this.renderRenameDialog()}
      ${this.renderShareDialog()}
    `;
  }

  private commands: Command<DriveItem>[] = [];

  private renderFiles() {
    return this.useGridView
      ? mgtHtml`
        <mgt-file-grid
          .fileListQuery=${this.fileListQuery || nothing}
          .itemId=${this.itemId || nothing}
          .itemPath=${this.itemPath || nothing}
          .files=${this.files || nothing}
          .fileQueries=${this.files || nothing}
          .groupId=${this.groupId || nothing}
          .driveId=${this.driveId || nothing}
          .siteId=${this.siteId || nothing}
          .userId=${this.userId || nothing}
          .insightType=${this.insightType || nothing}
          .fileExtensions=${this.fileExtensions || nothing}
          .itemView=${this.itemView || nothing}
          .pageSize=${this.pageSize || nothing}
          ?hide-more-files-button=${this.hideMoreFilesButton || nothing}
          .maxFileSize=${this.maxFileSize || nothing}
          ?enable-file-upload=${this.enableFileUpload || nothing}
          .maxUploadFile=${this.maxUploadFile || nothing}
          .excludedFileExtensions=${this.excludedFileExtensions || nothing}
          .commands=${this.commands}
          @itemClick=${this.handleItemClick}
        ></mgt-file-grid>
`
      : mgtHtml`
        <mgt-file-list
          .fileListQuery=${this.fileListQuery || nothing}
          .itemId=${this.itemId || nothing}
          .itemPath=${this.itemPath || nothing}
          .files=${this.files || nothing}
          .fileQueries=${this.files || nothing}
          .groupId=${this.groupId || nothing}
          .driveId=${this.driveId || nothing}
          .siteId=${this.siteId || nothing}
          .userId=${this.userId || nothing}
          .insightType=${this.insightType || nothing}
          .fileExtensions=${this.fileExtensions || nothing}
          .itemView=${this.itemView || nothing}
          .pageSize=${this.pageSize || nothing}
          ?hide-more-files-button=${this.hideMoreFilesButton || nothing}
          .maxFileSize=${this.maxFileSize || nothing}
          ?enable-file-upload=${this.enableFileUpload || nothing}
          .maxUploadFile=${this.maxUploadFile || nothing}
          .excludedFileExtensions=${this.excludedFileExtensions || nothing}
          @itemClick=${this.handleItemClick}
        ></mgt-file-list>
`;
  }

  private renderBreadcrumb() {
    return mgtHtml`
      <mgt-breadcrumb
        .breadcrumb=${this.breadcrumb.slice()}
        @breadcrumbclick=${this.handleBreadcrumbClick}
      ></mgt-breadcrumb>
`;
  }

  private handleItemClick(e: CustomEvent<DriveItem>): void {
    const item = e.detail;
    if (item.folder) {
      // load folder contents, update breadcrumb
      this.breadcrumb = [
        ...this.breadcrumb,
        { name: item.name, itemId: item.id, id: item.id, driveId: item.parentReference.driveId }
      ];
      // clear any existing query properties
      this.siteId = null;
      this.groupId = null;
      this.userId = null;
      this.files = null;
      this.fileExtensions = null;
      this.fileListQuery = null;
      this.fileQueries = null;
      this.itemPath = null;
      this.insightType = null;
      // set the item id to load the folder
      this.itemId = item.id;
      this.driveId = item.parentReference.driveId;
      this.fireCustomEvent('itemClick', item);
    }
  }

  private handleBreadcrumbClick(e: CustomEvent<FileListBreadCrumb>): void {
    const b = e.detail;
    this.breadcrumb = this.breadcrumb.slice(0, this.breadcrumb.indexOf(b) + 1);
    this.siteId = b.siteId;
    this.groupId = b.groupId;
    this.driveId = b.driveId;
    this.userId = b.userId;
    this.files = b.files;
    this.fileExtensions = b.fileExtensions;
    this.fileListQuery = b.fileListQuery;
    this.fileQueries = b.fileQueries;
    this.itemPath = b.itemPath;
    this.insightType = b.insightType;
    this.itemId = b.itemId;
    this.fireCustomEvent('breadcrumbclick', b);
  }

  private renderDeleteDialog() {
    return html`
      <fluent-dialog
        id="delete-file-dialog"
        dir=${this.direction}
        aria-label="Delete file dialog"
        modal="true"
        .hidden=${!this.deleteDialogVisible}
        @close=${this.cancelDelete}
        @cancel=${this.cancelDelete}
      >
        <div part="dialog-body">
          <h2>${strings.deleteFileTitle} ${this._activeFile?.name}</h2>

          <p>${strings.deleteFileMessage}</p>
          <div part="button-row">
            <fluent-button appearance="accent" @click=${this.performDelete}>
              ${strings.deleteFileButton}
            </fluent-button>
            <fluent-button appearance="outline" @click=${this.cancelDelete}>
              ${strings.cancel}
            </fluent-button>
          </div>
        </div>
      </fluent-dialog>
`;
  }

  private renderRenameDialog() {
    return html`
      <fluent-dialog
        id="rename-file-dialog"
        dir=${this.direction}
        aria-label="Rename file dialog"
        modal="true"
        .hidden=${!this.renameDialogVisible}
        @close=${this.cancelRename}
        @cancel=${this.cancelRename}
      >
        <form part="dialog-body" @submit=${this.performRename}>
          <h2>${strings.renameFileTitle} ${this._activeFile?.name}</h2>

          <p>
            <fluent-text-field
              id="new-file-name"
              part="dialog-input"
              appearance="outline"
              .value=${this._activeFile?.name}
              required
              auto-focus
              maxlength="200"
            ></fluent-text-field>
          </p>
          <div part="button-row">
            <fluent-button appearance="accent" type="submit">
              ${strings.renameFileButton}
            </fluent-button>
            <fluent-button appearance="outline" @click=${this.cancelRename}>
              ${strings.cancel}
            </fluent-button>
          </div>
        </form>
      </fluent-dialog>
`;
  }

  private renderShareDialog() {
    return html`
      <fluent-dialog
        id="share-file-dialog"
        dir=${this.direction}
        aria-label="Share file dialog"
        modal="true"
        .hidden=${!this.shareDialogVisible}
        @close=${this.cancelShare}
        @cancel=${this.cancelShare}
      >
        <div part="dialog-body">
          <h2>${strings.shareFileTitle} ${this._activeFile?.name}</h2>

          <p>${this.shareMode === 'view' ? strings.shareViewOnlyLink : strings.shareEditableLink}</p>
          <p>
            ${
              this.shareUrl
                ? html`
              <fluent-text-field
                id="share-file-url"
                part="dialog-input"
                appearance="outline"
                .value=${this.shareUrl}
                required
                auto-focus
              ></fluent-text-field>
              `
                : mgtHtml`
                <div class="loading-indicator">
                  <fluent-progress-ring role="progressbar" viewBox="0 0 8 8" class="progress-ring"></fluent-progress-ring>
                </div>
              `
            }
          </p>
          <div part="button-row">
            <fluent-button appearance="accent" @click=${this.copyToClipboard}>
              ${strings.copyToClipboardButton}
            </fluent-button>
          </div>
        </div>
      </fluent-dialog>
`;
  }

  private showShareFileEditable = (e: UIEvent, file: DriveItem): void => {
    this.showShareDialog(e, file, 'edit');
  };

  private showShareFileReadOnly = (e: UIEvent, file: DriveItem): void => {
    this.showShareDialog(e, file, 'edit');
  };

  private showShareDialog = (e: UIEvent, file: DriveItem, shareMode: 'view' | 'edit'): void => {
    e.stopPropagation();
    this._activeFile = file;
    this.shareDialogVisible = true;
    this.shareMode = shareMode;
    const graph = Providers.globalProvider.graph.forComponent(this);
    shareDriveItem(graph, this._activeFile, this.shareMode).then(share => {
      this.shareUrl = share.link?.webUrl;
    });
  };

  // needs to be an arrow function to preserve the this context
  private downloadFile = (e: UIEvent, file: DriveItem): void => {
    e.stopPropagation();
    this.clickFileLink(file['@microsoft.graph.downloadUrl']);
  };

  private clickFileLink = (url: string) => {
    const a = this.renderRoot.querySelector('#file-link') as HTMLAnchorElement;
    a.href = url;
    if (a.href) {
      a.click();
      a.href = '';
    }
  };

  private showRenameFileDialog = (e: UIEvent, file: DriveItem): void => {
    e.stopPropagation();
    this._activeFile = file;
    this.renameDialogVisible = true;
  };

  private showDeleteDialog = (e: UIEvent, file: DriveItem): void => {
    e.stopPropagation();
    this._activeFile = file;
    this.deleteDialogVisible = true;
  };

  private copyToClipboard = async (e: UIEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(this.shareUrl);
    this.shareUrl = null;
    this.shareDialogVisible = false;
    this._activeFile = null;
  };

  private cancelShare = (e: UIEvent) => {
    e.stopPropagation();
    this.shareUrl = null;
    this.shareDialogVisible = false;
    this._activeFile = null;
  };

  private cancelRename = (e: UIEvent) => {
    e.stopPropagation();
    this._activeFile = null;
    this.renameDialogVisible = false;
  };

  private performRename = async (e: UIEvent) => {
    e.preventDefault(); // stop form submission and page refresh
    e.stopPropagation();
    const input: HTMLInputElement = this.renderRoot.querySelector('#new-file-name');
    const newFileName = input.value;
    if (newFileName) {
      const graph = Providers.globalProvider.graph.forComponent(this);
      await renameDriveItem(graph, this._activeFile, newFileName);
      // need to refresh the list being shown....
      const grid = this.renderRoot.querySelector('mgt-file-grid') as MgtFileGrid;
      grid.reload(true);
      this.renameDialogVisible = false;
      this._activeFile = null;
      this.requestStateUpdate();
    }
  };

  private performDelete = async (e: UIEvent) => {
    e.stopPropagation();
    const graph = Providers.globalProvider.graph.forComponent(this);
    await deleteDriveItem(graph, this._activeFile);
    // need to refresh the list being shown....
    clearFilesCache();
    this.deleteDialogVisible = false;
    this._activeFile = null;
    this.requestStateUpdate();
  };

  private cancelDelete = (e: UIEvent) => {
    e.stopPropagation();
    this._activeFile = null;
    this.deleteDialogVisible = false;
  };
}
