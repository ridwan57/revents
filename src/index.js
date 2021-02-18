import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App.jsx';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const rootElt = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>


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
