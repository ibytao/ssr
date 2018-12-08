// Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'

// Styles
import styles from './style.scss'

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Button>Default</Button>
        <h1>Home</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
