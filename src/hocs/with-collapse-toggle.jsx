import React from "react";

export const withCollapseToggle = (Component) => {
  class CollapseToggle extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: true
      };

      this.handleCollapseToggle = this.handleCollapseToggle.bind(this);
    }

    handleCollapseToggle() {
      this.setState((state) => ({
        collapsed: !state.collapsed
      }));
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

  return CollapseToggle;
};
