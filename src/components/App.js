import React, { Component } from 'react'
// import App1 from './App1'
export default class App extends Component {
  render () {
    return (
      // <App1 />
      <div className='flex'>
        <header>
          <a href=''>Nav Left</a>
          <a href=''>Nav Right</a>
        </header>
        <main>
          <article>RESIZE THE WINDOW</article>
          <nav>SIDE NAV</nav>
          <aside>ASIDE</aside>
        </main>
        <footer>FOOTER</footer>
      </div>
    )
  }
}
