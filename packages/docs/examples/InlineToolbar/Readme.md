Editor with inline toolbar which is visible only when there is selection.

```js
<InlineToolbar />
```

Code:

```js static
import React, { Component } from "react";
import Editor from "nib-core";

const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    }
  ]
};

class InlineToolbar extends Component {
  state = {
    content: {}
  };

  onChange = content => {
    this.setState({ content });
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <Editor
          plugins="block inline"
          toolbar={{ inline: "inline" }}
          onChange={this.onChange}
          defaultValue={defaultValue}
          theme={{
            wrapper: {
              borderTop: "none",
              borderBottom: "none",
              borderLeft: "none",
              borderRight: "none"
            }
          }}
        />
        <pre>{JSON.stringify(content, null, 4)}</pre>
      </div>
    );
  }
}
```
