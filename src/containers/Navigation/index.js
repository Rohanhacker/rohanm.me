import React, { Component } from 'react'
import styles from './Navigation.css'
import className from 'classnames';

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
    }
  }
  handleClick(e) {
    if(!this.state.on) {
      this.setState({
        on: true
      })
    } else {
      this.setState({
        on: false
      })
    }
  }
  render() {
    return (
        <div className={styles.nav} onClick={::this.handleClick}>
            <div className={className(styles.menu,this.state.on ? styles.on : undefined)}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
            </div>
            <div>
                <ul className={className(styles.mainNav, this.state.on ? styles.shownav : undefined)} ref='mainNav'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                </ul>
            </div>
        </div>
    )
  }
}

export default Navigation;
