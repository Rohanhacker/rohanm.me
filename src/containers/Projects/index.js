import React, { Component } from 'react'
import Navigation from '../Navigation/'
import Footer from '../../utils/footer'
import { Accordion, Panel } from 'react-bootstrap'
import { rollText } from '../../utils/textEffect'
import className from 'classnames'
import styles from './projects.css'

class Projects extends Component {
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
  handleOver(e) {
      rollText(e.target)
  }
  render() {
    return (
      <div>
        <div className={styles.background} ref='background'></div>
        <div className={styles.container} ref='content'>
          <Navigation />
          <div className={styles.content}>
            <span className={styles.heading} ref='heading'>
              Projects
            </span>
          </div>
          <div className={styles.about}>
              <div>
                  <span className={styles.title}><h3>CrossPlatfrom Quiz Desktop App</h3></span>
                  <div className={styles.desc}>A cross platform quiz app build using electron with voice recognition built with electron with google sheets as database more info & screenshots @ <a href="https://github.com/Rohanhacker/Desktop-Quiz-App">
                    Github
                      </a> </div>
              </div>
              <div>
                  <span className={styles.title}><h3>Community Library Management System</h3></span>
                  <div className={styles.desc}>A library management system with react frontend and grails backend more info & screenshots @ <a href="https://github.com/Rohanhacker/librarysystem">
                    Frontend
                      </a> <br/>
                      @ <a href="https://github.com/Rohanhacker/librarysystem">
                    Backend
                      </a>
                       </div>
              </div>
              <div>
                  <span className={styles.title}><h3>Weather Progressive Web App</h3></span>
                  <div className={styles.desc}>A progressive web app for weather info more info & screenshots @ <a href="https://github.com/Rohanhacker/weatherPwa">
                    Github
                      </a> </div>
              </div>
              <div>
                  <span className={styles.title}><h3>Pitch Perfect Ios App</h3></span>
                  <div className={styles.desc}>An Ios App for change voice using swift info more info & screenshots @ <a href="https://github.com/Rohanhacker/pitchperfect">
                    Github
                      </a> </div>
              </div>
              <div>
                  <span className={styles.title}><h3>Remote Keylogger</h3></span>
                  <div className={styles.desc}>A remote keylogger which record keylogs and screenshot and send them remotely more info & screenshots @ <a href="https://github.com/Rohanhacker/rohankey">
                    Github
                      </a> </div>
              </div>
                            <div>
                  <span className={styles.title}><h3>Canvas Paint</h3></span>
                  <div className={styles.desc}>A paint app in html 5 canvas info more info & screenshots @ <a href="https://github.com/Rohanhacker/paint-App">
                    Github
                      </a> </div>
              </div>
              <div>
                  <span className={styles.title}><h3>Single Page html theme</h3></span>
                  <div className={styles.desc}>A single page parallax theme/template info more info & screenshots @ <a href="https://github.com/Rohanhacker/parallax-SinglePage">
                    Github
                      </a> </div>
              </div>
              <div>
                  <span className={styles.title}><h3>Salesforce to DocumentDb </h3></span>
                  <div className={styles.desc}>A utility to transfer data from salesforce to document Db  @ <a href="https://github.com/Rohanhacker/Salesforce-To-DocumentDB">
                    Github
                      </a> </div>
              </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Projects;
