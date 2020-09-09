import { ErrorBoundary, init as initSentry } from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { initialize as initGoogleAnalytics } from 'react-ga';
import App from './App';
import config from './infra/config';

// Init google analytics
if (config.secrets.googleAnalyticsToken) {
  initGoogleAnalytics(config.secrets.googleAnalyticsToken, {
    gaOptions: {
      sampleRate: 100
    }
  });
}

// Init Sentry
if (config.secrets.sentryToken) {
  initSentry({
    dsn: config.secrets.sentryToken
  });
}

// Init React
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
