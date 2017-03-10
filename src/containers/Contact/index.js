import React, { Component } from 'react'
import Navigation from '../Navigation/'
import className from 'classnames'
import styles from './contact.css'
import Footer from '../../utils/footer'
import { Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap'




class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      subject: '',
      message: ''
    }
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
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      email: '',
      subject: '',
      message: ''
    })
    alert("sorry I don't have a server right now also I am out of my firebase limits so no backend for now mail me instead hello@rohanm.com")
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  handleSubjectChange(e) {
    this.setState({
      subject: e.target.value
    })
  }
  handleMessageChange(e) {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    const FormInstance = (
      <Form horizontal onSubmit={::this.handleSubmit}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={8}>
            <FormControl type="email" placeholder="Email" value={this.state.email} onChange={::this.handleEmailChange} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Subject
          </Col>
          <Col sm={8}>
            <FormControl type="text" placeholder="Subject" value={this.state.subject} onChange={::this.handleSubjectChange} />
          </Col>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <Col componentClass={ControlLabel} sm={2}>
            Message
          </Col>
          <Col sm={8}>
            <FormControl componentClass="textarea" placeholder="message" value={this.state.message} onChange={::this.handleMessageChange} />
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
          <Footer />
        </div>
      </div>
    )
  }
}

export default Contact;