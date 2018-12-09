// Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile'

// Styles
import styles from './style.scss'

const withWrap = (WrappedComponent) => (
  class extends Component {
    render() {
      console.log('------------------')
      return <WrappedComponent {...this.props} />
    }
  }
)

@withWrap
export default class Home extends Component {
  render() {
    // console.log(this.props.c)
    return (
      <div className={styles.home}>
        <Button>Default</Button>
        <h1>Home</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
}
