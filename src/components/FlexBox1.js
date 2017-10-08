import React, { Component } from 'react'

export default class FlexBox1 extends Component {
  render () {
    return (
      <div className='sidebar1'>
        <div className='section1'>
          <div className='item1'>Messages</div>
          <div className='item1'>Friends</div>
          <div className='item1'>User Profile</div>
        </div>
        <div className='section1'>
          <div className='item1'>Settings</div>
          <div className='item1'>Questions</div>
        </div>
      </div>
    )
  }
}
