import React, { Component } from 'react';
import shuffle from './shuffle'
import transformText from './textEffect'
import styles from './subtitle.css'

class Claims extends Component {
  componentDidMount() {
    this.list = []
    this.nextCycle(true)
  }

  componentWillUnmount() {
    if (this._cycleTimeout) {
      clearTimeout(this._cycleTimeout)
    }
  }

  getListItem() {
    if (this.list.length === 0) {
      this.list = shuffle(this.props.words.concat([]))
    }

    return this.list.shift()
  }

  nextCycle(longDelay) {
    if (this._cycleTimeout) clearTimeout(this._cycleTimeout)
    this._cycleTimeout = setTimeout(::this.cycle, (longDelay ? 3000 : 2500) + Math.random() * 900)
  }

  cycle() {
    this.nextCycle()

    setTimeout(::this.cycle1, 17 + Math.random() * 1100)
    setTimeout(::this.cycle2, 600 + Math.random() * 1100)
    setTimeout(::this.cycle3, 900 + Math.random() * 1100)
  }

  cycle1() {
    transformText(this.refs.word1, this.getListItem())
  }

  cycle2() {
    transformText(this.refs.word2, this.getListItem())
  }

  cycle3() {
    transformText(this.refs.word3, this.getListItem())
  }

  render() {
    return (
      <span className={styles.heading}>
        <span ref="word1">{this.props.words[0]}</span>, <span ref="word2">{this.props.words[1]}</span>,  <span ref="word3">{this.props.words[2]}</span>
      </span>
    )
  }
}

export default Claims