import React, { Component } from 'react'
import { rollText } from './textEffect'
import styles from './footer.css'

class Footer extends Component {
    handleover(e) {
        rollText(e.target)
    }
    render() {
        return (
            <ul className={styles.nav}>
                <li><a href="https://github.com/rohanhacker" onMouseOver={::this.handleover} >Github</a></li>
                <li><a href="https://www.linkedin.com/in/hellorohan" onMouseOver={::this.handleover} >Linkedin</a></li>
                <li><a href="https://www.facebook.com/r0hanmalh0tra" onMouseOver={::this.handleover} >Facebook</a></li>
                <li><a href="https://twitter.com/hellorohan" onMouseOver={::this.handleover} >Twitter</a></li>
            </ul>
        )
    }
}

export default Footer
