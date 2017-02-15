import React from 'react';

import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import HeaderComponent from '../components/header.js'

class MainTemplate extends React.Component {
  render() {
    return (
      <div>
        <div className="app-wrapper">
          <HeaderComponent />
          <ReactCssTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              <div className="wrapper middle">
                {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
              </div>
            </ReactCssTransitionGroup>
        </div>
      </div>
    )
  }
}

export default MainTemplate