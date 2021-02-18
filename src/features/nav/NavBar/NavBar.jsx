import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedInMenu from '../Menus/SignedInMenu'
import SignedOutMenu from '../Menus/SignedOutMenu'

class NavBar extends Component {
  state = {
    authenticated: false
  }
  handleSignIn = () => {
    this.setState({ authenticated: true })
  }
  handleSignOut = () => {
    this.setState({ authenticated: false })
    if (this.props.history) {
      this.props.history.push('/')
    }
  }
  render () {
    const { authenticated } = this.state
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} to='/' header>
            <img src='assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name='Events' />
          <Menu.Item as={NavLink} to='/people' name='People' />
          <Menu.Item>
            <Button
              as={NavLink}
              to='/createEvent'
              floated='right'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu handleSignOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu handleSignIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    )
  }
}

export default withRouter(NavBar)
