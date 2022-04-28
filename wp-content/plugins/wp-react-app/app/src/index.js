import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById("wp-react-app");
if (rootEl) {
  const posts = JSON.parse( rootEl.getAttribute( 'data-default-settings' ) );
  ReactDOM.render(
    <React.StrictMode>
      <App posts={posts} />
    </React.StrictMode>,
    rootEl
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
