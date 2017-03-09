import React, { Component } from 'react'
import Navigation from '../Navigation/'
import className from 'classnames'
import styles from './contact.css'
import { Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap'

class Contact extends Component {
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
    const FormInstance = (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={8}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Subject
          </Col>
          <Col sm={8}>
            <FormControl type="text" placeholder="Subject" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <Col componentClass={ControlLabel} sm={2}>
            Message
          </Col>
          <Col sm={8}>
            <FormControl componentClass="textarea" placeholder="message" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button bsStyle="primary" type="submit" bsSize="large" >
              Send
            </Button>
          </Col>
        </FormGroup>
      </Form>
      );
    return (
      <div>
        <div className={styles.background} ref='background'></div>
        <div className={styles.container} ref='content'>
          <Navigation />
          <div className={styles.content}>
            <span className={styles.heading} ref='heading'>
              Contact
            </span>
            { FormInstance }
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;