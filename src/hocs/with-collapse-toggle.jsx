import React from "react";

export const withCollapseToggle = (Component) => {
  class SortPlacesComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: true
      };

      this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
    }

    handleCollapseToggle() {
      const {collapsed} = this.state;
      this.setState({collapsed: !collapsed});
    }

    render() {
      const {collapsed} = this.state;
      return <Component
        {...this.props}
        collapsed={collapsed}
        onCollapseToggle={this.handleCollapseToggle}
      />;
    }
  }

  return SortPlacesComponent;
};
