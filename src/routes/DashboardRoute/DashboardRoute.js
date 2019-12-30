import React, { Component } from 'react'
import config from '../config'
import UserContext from '../contexts/UserContext'

class DashboardRoute extends Component {
  state = {
    language: '',
    words: []
  }

  static contextType = UserContext
  componentDidMount = () => {
    return fetch(`${config.API_ENDPOINT}/language`)
  }
  
  render() {
    return (
      <section>
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute
