import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GraphicView from './GraphicView'
import 'styles/core.scss'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={GraphicView} />
      </Router>
    )
  }
}

export default Routes
