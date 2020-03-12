import React, { Component } from 'react'
import {Menu,} from 'semantic-ui-react'
import {Link } from 'react-router-dom'

export default class NavBar extends Component {
   state = {
     activeItem: 'Home'
   }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu inverted>
        <Link to='/'>
          <Menu.Item
            as='div'
            name='home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >Home
          </Menu.Item>
        </Link>
        <Link to='/about'>
          <Menu.Item
            as='div'
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}