import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review1:
    'I never thought it would be so easy to raise my concerns and have them heard. This platform is truly empowering!',
  author3Alt: 'Image of Amit Patel',
  author4Name: 'Sneha Verma',
  author4Alt: 'Image of Sneha Verma',
  content1:
    "Read what our users have to say about their experience using our platform to voice their complaints against India's government.",
  author2Alt: 'Image of Priya Singh',
  author1Position: 'Student',
  author1Src:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Activist',
  author2Src:
    'https://images.unsplash.com/photo-1504346466600-714572c4b726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    "Being an activist, I'm always looking for ways to make a difference. This platform has been instrumental in amplifying my voice.",
  author1Alt: 'Image of Rahul Sharma',
  author3Src:
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    "I've used this platform multiple times to address issues affecting my business. The response has been prompt and effective.",
  author2Name: 'Priya Singh',
  author4Src:
    'https://images.unsplash.com/photo-1703925154666-7484e0ffbdc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjMyMjAyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'Rahul Sharma',
  author3Position: 'Business Owner',
  review2:
    "As a journalist, I appreciate the transparency this platform provides. It's a great tool for accountability.",
  heading1: 'Testimonials',
  author3Name: 'Amit Patel',
  author2Position: 'Journalist',
}

Testimonial.propTypes = {
  review1: PropTypes.string,
  author3Alt: PropTypes.string,
  author4Name: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author1Src: PropTypes.string,
  author4Position: PropTypes.string,
  author2Src: PropTypes.string,
  review4: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  review3: PropTypes.string,
  author2Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  review2: PropTypes.string,
  heading1: PropTypes.string,
  author3Name: PropTypes.string,
  author2Position: PropTypes.string,
}

export default Testimonial
