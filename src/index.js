import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

import { Example } from "./example";

customElements.define(
  "wc-example",
  reactToWebComponent(Example, React, ReactDOM)
);
