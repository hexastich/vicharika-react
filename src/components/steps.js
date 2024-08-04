import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container1 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps-actions">
              <button className="thq-button-filled thq-button-animated steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container2">
            <div className="steps-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text04 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text05 thq-heading-3">01</label>
            </div>
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text07 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text08 thq-heading-3">02</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text10 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text11 thq-heading-3">03</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text13 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step2Description:
    'Provide detailed information about the government issue you want to complain about, including any relevant documents or evidence.',
  step1Description:
    "Sign up for an account on our platform to start lodging complaints against India's government issues.",
  step2Title: 'Submit Your Complaint',
  step4Description:
    'Receive updates on the status of your complaint and follow-up actions taken by the authorities to resolve the issue.',
  step3Title: 'Track Complaint Status',
  step4Title: 'Resolution and Follow-up',
  step3Description:
    'Monitor the progress of your complaint as our team works towards addressing the issue with the Indian government.',
  step1Title: 'Create an Account',
}

Steps.propTypes = {
  step2Description: PropTypes.string,
  step1Description: PropTypes.string,
  step2Title: PropTypes.string,
  step4Description: PropTypes.string,
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
  step3Description: PropTypes.string,
  step1Title: PropTypes.string,
}

export default Steps
