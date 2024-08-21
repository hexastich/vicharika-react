import React from 'react'

import PropTypes from 'prop-types'

import './your-voice.css'

const YourVoice = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="yourVoice-accent2-bg">
          <div className="yourVoice-accent1-bg">
            <div className="yourVoice-container1">
              <div className="yourVoice-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="yourVoice-actions">
                <button type="button" className="thq-button-filled yourVoice-button">
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

YourVoice.defaultProps = {
  action1: 'Start Complaining',
  content1:
    'Speak up against government issues that affect you and your community.',
  heading1: 'Raise Your Voice',
}

YourVoice.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default YourVoice
