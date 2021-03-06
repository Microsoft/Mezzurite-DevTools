import React, { Fragment } from 'react';
import { func } from 'prop-types';

import './HelpDialog.css';

const applicationLoadTimeDescription = ` is the amount of time it takes to load the SPA framework. This is calculated using the navigation start time and the application framework load time.`;
const componentLoadTimeDescription = ` is the amount of time it takes to load a single component. This is calculated by using the framework's component life cycle.`;
const viewportLoadTimeDescription = `  is the amount of time it takes to load the components visible in the current viewport.`;

const HelpDialog = (props) => (
  <Fragment>
    <button className='help-dialog--cancel' onClick={props.onCloseClick}>
      <i className='ms-Icon ms-Icon--Cancel' title='Close' aria-label='Close' />
    </button>
    <div className='help-dialog--container'>
      <div className='help-dialog--content'>
        <h2 className='help-dialog--heading'>Understanding Mezzurite Metrics</h2>
        <ul className='help-dialog--vocab'>
          <li className='help-dialog--item'>
            <span className='help-dialog--vocab-title'>Application Load Time (ALT)</span>
            {applicationLoadTimeDescription}
          </li>
          <li className='help-dialog--item'>
            <span className='help-dialog--vocab-title'>Component Load Time (CLT)</span>
            {componentLoadTimeDescription}
          </li>
          <li className='help-dialog--item'>
            <span className='help-dialog--vocab-title'>Viewport Load Time (VLT)</span>
            {viewportLoadTimeDescription}
          </li>
          <li className='help-dialog--item'>
            <a
              aria-label='Learn more about Mezzurite'
              className='help-dialog--learn-more'
              href='https://github.com/Microsoft/Mezzurite#background'
              target='_blank'
            >
              Learn More
            </a>
          </li>
        </ul>
        <div className='help-dialog--action'>
          <button
            aria-label='Close'
            className='help-dialog--close'
            onClick={props.onCloseClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </Fragment>
);

HelpDialog.propTypes = {
  onCloseClick: func
};

export default HelpDialog;
