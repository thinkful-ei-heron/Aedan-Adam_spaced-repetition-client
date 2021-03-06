import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (

      <nav className='header-nav'>
        <span>
          {this.context.user.name}
        </span>
        <Link
          onClick={this.handleLogoutClick}
          to='/login' className='nav-link'>
          Logout
          </Link>
      </nav>

    )
  }

  renderLoginLink() {
    return (
      <nav className='header-nav'>
        <Link to='/login' className='nav-link'>Login</Link>
        {' '}
        <Link to='/register' className='nav-link'>Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1 className='header-title'>
          <Link to='/' className='header-link'>
            Spaced repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
