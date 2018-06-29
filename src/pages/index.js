import React from 'react'
import Layout from '../components/layout'

import '../css/main.css'
class IndexPage extends React.Component {

  render() {

    return (
      <Layout>

        <header id="header">
          <h1>Eventually</h1>
          <p>A simple template for telling the world when you'll launch<br />
          your next big thing. Brought to you by <a href="http://html5up.net">HTML5 UP</a>.</p>
        </header>

        <form id="signup-form" method="post" action="#">
          <input type="email" name="email" id="email" placeholder="Email Address" />
          <input type="submit" value="Sign Up" />
        </form>

        <footer id="footer">
          <ul className="icons">
            <li><a href="#twitter" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#ig" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#github" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="#email" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled.</li><li>Credits: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </footer>

      </Layout>
    )
  }
}

export default IndexPage
