import React, { useEffect, useState } from "react";
import { EventHandler } from 'cross-web-components'

export const Example: React.FC = () => {
  const [name, setName] = useState<string>('')

  return (
    <React.Fragment>
      <input placeholder='Your name' onChange={({ target: { value } }) => setName(value)} />
      <h1>Hello {name}!</h1>
    </React.Fragment>)
};

