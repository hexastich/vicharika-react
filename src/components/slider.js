import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './slider.css'

const Slider = (props) => {

  return (
    <div className="slider-header78">
      <div className="slider-column thq-section-padding thq-section-max-width">
        <div className="slider-content">
          <h1 className="slider-text thq-heading-1">{props.heading1}</h1>
          <p className="slider-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="slider-actions">
          <button className="thq-button-filled slider-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline slider-button1">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="slider-content1">
        <div className="slider-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="slider-placeholder-image thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="slider-placeholder-image01 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="slider-placeholder-image02 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="slider-placeholder-image03 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="slider-placeholder-image04 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="slider-placeholder-image05 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="slider-placeholder-image06 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="slider-placeholder-image07 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="slider-placeholder-image08 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="slider-placeholder-image09 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="slider-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="slider Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="slider-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="slider-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="slider-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="slider-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="slider-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="slider-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="slider-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="slider-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="slider-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="slider-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="slider-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="slider-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="slider-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="slider Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="slider-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="slider-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Slider.defaultProps = {
  image10Src: '/assets/images/road-wire.jpg',
  image3Alt: 'road-wire-issue',
  image9Src:
    'https://images.unsplash.com/photo-1524314710162-eecbbcc26a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'slider Image',
  action2: 'Learn More',
  image4Alt: 'slider Image',
  image3Src:
    'https://images.unsplash.com/photo-1516540507469-9fff64887136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'slider Image',
  image7Src: '/assets/images/school.jpg',
  image12Src: '/assets/images/hospital.jpg',
  image11Alt: 'hospital-issues',
  action1: 'Get Started',
  
  image8Alt: 'slider Image',
  image1Src:
    'https://images.unsplash.com/photo-1455157823797-3019317cbcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAzM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image11Src: '/assets/images/light-on.PNG',
  image7Alt: 'light-on-issue',
  image2Alt: 'slider Image',
  image1Alt: 'Complain Against Government Issues',
  image12Alt: 'slider Image',
  image10Alt: 'slider Image',
  content1:"Raise your voice and share your concerns about India's government policies and actions. Your feedback matters!",
  heading1: 'Speak Up About Government Issues',
  image4Src:
    'https://images.unsplash.com/photo-1516477173607-7ea60164df72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'slider Image',
  image8Src:
    'https://images.unsplash.com/photo-1526572690437-c3f99d109cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1566235907714-4223354b4e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1540754231524-d3112fda810f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAzMnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Slider.propTypes = {
  image10Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image5Alt: PropTypes.string,
  action2: PropTypes.string,
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image12Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action1: PropTypes.string,
  image8Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image11Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image6Src: PropTypes.string,
  image5Src: PropTypes.string,
}

export default Slider
