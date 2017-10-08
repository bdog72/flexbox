import React, { Component } from 'react'
import FlexBox1 from './FlexBox1'
import FlexBox2 from './FlexBox2'
import FlexBox3 from './FlexBox3'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li><Link className='btn btn-primary btn-sm' to='/'>FlexBox 1</Link></li>
              <li><Link className='btn btn-primary btn-sm' to='/flexbox2'>FlexBox 2</Link></li>
              <li><Link className='btn btn-primary btn-sm' to='/flexbox3'>FlexBox 3</Link></li>
            </ul>
          </div>
          <hr />
          <Route exact path='/' component={FlexBox1} />
          <Route exact path='/flexbox2' component={FlexBox2} />
          <Route exact path='/flexbox3' component={FlexBox3} />
        </div>
      </Router>
    )
  }
}

// class App extends Component {
//   render () {
//     return <div>
//       <BasicExample />
//     </div>
//   }
// }
//
// export default App

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to='/'>FlexBox1</Link></li>
//         <li><Link to='/flexbox2'>FlexBox2</Link></li>
//         <li><Link to='/flexbox3'>FlexBox3</Link></li>
//       </ul>
//       <hr />
//       <Route exact path='/' component={FlexBox1} />
//       <Route exact path='/flexbox2' component={FlexBox2} />
//       <Route exact path='/flexbox3' component={FlexBox3} />
//     </div>
//   </Router>
// )

// const Flex1 = () => (
//   <div>
//     <FlexBox1 />
//   </div>
// )
//
// const Flex2 = () => (
//   <div>
//     <FlexBox2 />
//   </div>
// )
//
// const Flex3 = () => (
//   <div>
//     <FlexBox3 />
//   </div>
// )
