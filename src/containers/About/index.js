import React, { Component } from 'react'
import Navigation from '../Navigation/'
import className from 'classnames'
import styles from './about.css'

class About extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    this.refs.content.addEventListener('scroll',this.handleScroll)
  }
  componentWillUnmount() {
    this.refs.content.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(event) {
    let height = this.refs.heading.getBoundingClientRect().top
    if(height < 50) {
      this.refs.background.style.filter = 'blur(0px) brightness(30%)'
    } else {
      this.refs.background.style.filter = 'blur(0px)'
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
      <div>
        <div className={styles.background} ref='background'></div>
        <div className={styles.container} ref='content'>
          <Navigation />
          <div className={styles.content}>
            <span className={styles.heading} ref='heading'>
              About
            </span>
          </div>
          <div className={styles.about}>
            <p>
              <span className={styles.highlight}>Cheers</span>, I am a computer science engineering student currently in final year at <span className={styles.highlight}>JECRC</span>, Jaipur. I love programming, designing and video games.
            </p>
            <h2>Internships :</h2>
            <div className={styles.internships}>
                <img src="../../../static/img/youstart.png" alt="Youstart"/>
                <div className={styles.internAbout}>
                    <h3>Youstart Labs</h3>
                    <h5>Jan 2017 - Currently</h5>
                    <p>working mainly in react native and node js (express, loopback etc) </p>
                </div>
            </div>
            <div className={styles.internships}>
                <img src="../../../static/img/celebal.png" alt="Celebal"/>
                <div className={styles.internAbout}>
                    <h3>Celebal Corp</h3>
                    <h5>Sept 2016 - Dec 2016</h5>
                    <p>created dashboard in react, web app for video chat app and backend using firebase </p>
                </div>
            </div>
            <h2>Skills:</h2>
            <span className={styles.skills}>
                HTML, CSS, JAVASCRIPT (and friends), C/C++, Java, Python, MongoDB, SQL
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
