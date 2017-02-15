import React from 'react';

class PageTitleComponent extends React.Component {
  render() {
    return (
      <h2 className="page-title">
        { this.props.text }
      </h2>
    )
  }
}

export default PageTitleComponent;