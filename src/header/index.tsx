import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

import { Header } from "./header";

customElements.define(
  "wc-header",
  reactToWebComponent(Header, React, ReactDOM)
);
