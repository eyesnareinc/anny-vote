import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AnalyticsApp from './AnalyticsApp';
import VoteApp from './VoteApp';
import { withCookies, CookiesProvider } from 'react-cookie';

const render = App => {
  const CookieApp = withCookies(App);
  ReactDOM.render(
    <CookiesProvider>
      <CookieApp />
    </CookiesProvider>,
    document.getElementById('root')
  );
}
const path = window.location.pathname;
if (path.includes('analytics')){
  render(AnalyticsApp);
} else {
  render(VoteApp);
}
