Themed editor.

```js
<Themed />
```

Code:

```js static
import React from "react";
import Editor from "nib-core";

const customTheme = {
  editor: {
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    borderLeft: "1px solid white",
    borderRight: "1px solid white",
    backgroundColor: "#212121",
    color: "white"
  },
  toolbar: {
    borderTop: "1px solid white",
    borderLeft: "1px solid white",
    borderRight: "1px solid white",
    backgroundColor: "#212121",
    color: "white"
  }
};

const Themed = () => (
  <Editor
    plugins="block inline list"
    toolbar={{ htop: "block inline list" }}
    theme={customTheme}
  />
);
```
