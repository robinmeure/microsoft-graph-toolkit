import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from '@fluentui/react';
import { Msal2Provider } from '@microsoft/mgt-msal2-provider';
import { Providers, LoginType } from '@microsoft/mgt-element';
import { brokerSettings } from '@microsoft/mgt-chat';

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
    overflow: 'hidden'
  }
});

brokerSettings.functionHost = process.env.REACT_APP_URL_AZURE_FUNCTION!;
brokerSettings.appId = process.env.REACT_APP_BACKEND_CLIENT_ID!;

Providers.globalProvider = new Msal2Provider({
  clientId: process.env.REACT_APP_CLIENT_ID!,
  loginType: LoginType.Redirect,
  redirectUri: window.location.protocol + '//' + window.location.host,
  scopes: [
    'Bookmark.Read.All',
    'Calendars.Read',
    'Chat.Create',
    'Chat.Read',
    'Chat.ReadBasic',
    'Chat.ReadWrite',
    'ChatMember.ReadWrite',
    'ChatMessage.Send',
    'ExternalItem.Read.All',
    'Files.Read',
    'Files.Read.All',
    'Files.ReadWrite.All',
    'Group.Read.All',
    'Group.ReadWrite.All',
    'Mail.Read',
    'Mail.ReadBasic',
    'People.Read',
    'People.Read.All',
    'Presence.Read.All',
    'User.Read',
    'Sites.Read.All',
    'Sites.ReadWrite.All',
    'Tasks.Read',
    'Tasks.ReadWrite',
    'Team.ReadBasic.All',
    'User.ReadBasic.All',
    'User.Read.All'
  ]
});

ReactDOM.render(<App />, document.getElementById('root'));
