import React, { PureComponent } from "react";
import { Button, Icons } from "nib-ui";

import { linkPluginKey } from "./plugins";

class LinkMenu extends PureComponent {
  showLinkToolbar = () => {
    const { view = {} } = this.props;
    const { state, dispatch } = view;
    if (!view.hasFocus) view.focus();
    dispatch(state.tr.setMeta("SHOW_LINK_TOOLBAR", true));
  };

  isLinkMarkActive = () => {
    const { view: { state } = {} } = this.props;
    if (!state) return;
    const pluginState = linkPluginKey.getState(state);
    return pluginState && !!pluginState.link;
  };

  render() {
    return (
      <Button
        name="link"
        onClick={this.showLinkToolbar}
        disabled={this.isLinkMarkActive()}
      >
        <Icons.Link />
      </Button>
    );
  }
}

export default LinkMenu;
