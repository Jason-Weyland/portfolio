import React, { Component } from 'react';
import constants from '../utils/constants';

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col d-flex justify-content-center'>
                <a className='btn btn-social-icon btn-linkedin mx-1' target='_blank' rel="noopener noreferrer" href={constants.LINKEDIN_PROFILE}>
                  <i className='fa fa-linkedin text-light'/>
                </a>{" "}
                <a className='btn btn-social-icon btn-github mx-1' target='_blank' rel="noopener noreferrer" href={constants.GITHUB_PROFILE}>
                  <i className='fa fa-github text-light'/>
                </a>{" "}
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <p className='text-secondary'>Jason Weyland</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;