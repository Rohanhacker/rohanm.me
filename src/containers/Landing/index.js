import React, { Component } from 'react'
import styles from './Landing.css'
import Subhead from '../../utils/subtitle'
import superb from 'superb'
import transformText from '../../utils/textEffect'
import Navigation from '../Navigation/'
import Footer from '../../utils/footer'
import className from 'classnames';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    let date = new Date()
    let day = date.getDay()
    this.state = {
      on: false,
    }
    switch(day) {
      case 0:
        this.day = 'Sunday'
        break
      case 1:
        this.day = 'Monday'
        break
      case 2:
        this.day = 'Tuesday'
        break
      case 3:
        this.day = 'Wednesday'
        break
      case 4:
        this.day = 'Thrusday'
        break
      case 5:
        this.day = 'Friday'
        break
      case 6:
        this.day = 'Saturday'
        break
    }
  }
  componentDidMount() {
    this.refs.content.addEventListener('scroll',this.handleScroll)
    this.nextCycle()

  }
  componentWillUnmount() {
    this.refs.content.removeEventListener('scroll', this.handleScroll)
    if (this._cycleTimeout) {
      clearTimeout(this._cycleTimeout)
    }
  }
  nextCycle() {
    if (this._cycleTimeout) clearTimeout(this._cycleTimeout)
    this._cycleTimeout = setTimeout(::this.cycle, 3500 + Math.random() * 900)
  }
  cycle() {
    this.nextCycle()
    transformText(this.refs.word, superb())
  }
  handleScroll(event) {
    let height = this.refs.heading.getBoundingClientRect().top
    console.log(this.refs.heading.getBoundingClientRect())
    if(height < 50) {
      this.refs.background.style.filter = 'blur(2px)'
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
              Rohan Malhotra
            </span>
            <Subhead words={['Coder','Designer','Wizard','Indian','Geek','Startup Enthusiast','Web Developer','Student','Casual Nerd', 'Developer', 'Casual Pentester']} />
          </div>
          <div className={styles.about}>
            <p>
              <span className={styles.highlight}>Cheers</span>, I am a computer science engineering student currently in final year at <span className={styles.highlight}>JECRC</span>, Jaipur.
            </p>
            <p>
              You are currently looking at my <span className={styles.highlight}>site</span>, that's awesome.
            </p>
            <p>
              This site uses <span className={styles.highlight}>React</span>, GSAP, CSS3, postcss and some other magical stuff.
            </p>
            <p>Pretty neat, <span className={styles.highlight}>huh?</span></p>
          </div>
          <div className={styles.staybold}>
            <span>
              {'Stay bold & Have a '}
              <span ref="word">{superb()}</span>
              {` ${this.day}`}
            </span>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
