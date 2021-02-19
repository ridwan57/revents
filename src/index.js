import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App.jsx';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './app/store/ConfigureStore.jsx';
import ScrollToTop from './app/common/util/ScrollToTop.jsx';

const rootElt = document.getElementById('root')
const store = ConfigureStore()
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop >
      </BrowserRouter>
    </Provider>



    , rootElt)
  // ReactDOM.render(<h1>dd</h1>, rootElt)
}
if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
