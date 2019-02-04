import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReduser from './reducers/balance'
import App from './components/App'

const store = createStore(rootReduser)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
