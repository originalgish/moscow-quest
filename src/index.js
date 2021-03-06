import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'react-app-polyfill/ie11'
import 'core-js/stable'

import App from './App'
import store from './store'

if (module.hot) module.hot.accept()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
