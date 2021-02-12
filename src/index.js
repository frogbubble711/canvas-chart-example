import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/AppContainer'
import LeftNavigation from './components/LeftNavigation'
import { Container } from 'reactstrap'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import './styles/core.scss'

ReactDOM.render(
  <div>
    <Container fluid>
      <LeftNavigation>
        <App />
      </LeftNavigation>
    </Container>
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
