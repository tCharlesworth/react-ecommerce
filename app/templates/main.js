import React from 'react';

import ReactCssTransitionGroup from 'react-addons-css-transition-group';

class MainTemplate extends React.Component {
  render() {
    return (
      <div>
        <div className="app-wrapper">
          <ReactCssTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
            </ReactCssTransitionGroup>
        </div>
      </div>
    )
  }
}

export default MainTemplate