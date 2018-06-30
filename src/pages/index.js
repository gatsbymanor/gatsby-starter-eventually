import React from 'react'
import Layout from '../components/layout'
import SlideShow from '../components/SlideShow'
import red from '../images/bg01.jpg'
import blue from '../images/bg02.jpg'
import green from '../images/bg03.jpg'
import '../css/styles.css'
class IndexPage extends React.Component {

  componentDidMount() {
    document.body.classList.add("is-preload")
    window.addEventListener('load', this.initialLoadAnimation);
  }

  componentDidUnmount() {
    window.removeEventListener('load', this.initialLoadAnimation);
  }

  initialLoadAnimation = () => {
    window.setTimeout(function() {
      document.body.classList.remove("is-preload")
    }, 100);
  }

  render() {

    return (
      <Layout>

          <header id="header">
            <h1>Eventually</h1>
            <p>A simple template for telling the world when you'll launch <br />
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
          <SlideShow
            slideInterval={3400}
            autoplay
            slides={[red, blue, green]}
          />
      </Layout>
    )
  }
}

export default IndexPage
