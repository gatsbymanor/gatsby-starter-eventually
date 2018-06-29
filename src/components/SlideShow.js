import React, { Component } from 'react';
import classNames from 'classnames'
import './Slideshow.css';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideInterval: props.slideInterval,
      autoplay: props.autoplay,
      slides: props.slides,
      currentSlide: 0,
    };

  }

  componentDidMount() {
    if (this.state.autoplay) this.runSlideShow();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  runSlideShow = () => {
    let intervalId = setInterval(this.autoSlideshow, this.state.slideInterval);
    this.setState({
      intervalId
    });
  }

  autoSlideshow = () => {
    this.setState({
      currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
    });
  }


  render() {
    const { slides, currentSlide } = this.state;


    return (
      <div id="bg">
        {slides.map((obj, idx) => {
          var visibleClass = classNames({
            'visible': idx === currentSlide,
            'top' : idx === currentSlide,
          });

          return (
            <div key={idx} className={visibleClass} style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                backgroundImage: `url(${slides[idx]})`,
              }}
            ></div>
          )
        })}
      </div>
    );
  }
}

export default Slideshow;
