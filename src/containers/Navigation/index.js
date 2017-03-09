import React, { Component } from 'react'
import styles from './Navigation.css'
import className from 'classnames';
import {rollText} from '../../utils/textEffect'
import { Link } from 'react-router-dom'

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
  handleover(e) {
    try {
      rollText(e.target)
    } catch(e) {
      
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
                <li><Link to='/' onMouseOver={::this.handleover} >Home</Link></li>
                <li><Link to='/about' onMouseOver={::this.handleover} > About </Link></li>
                <li><Link to='/' onMouseOver={::this.handleover} > Projects </Link></li>
                <li><Link to='/contact' onMouseOver={::this.handleover} > Contact </Link></li>
                </ul>
            </div>
        </div>
    )
  }
}

export default Navigation;
