import React from 'react';
import './App.css';

import 'rsuite/lib/styles/themes/dark/index.less';

/** import default css */
// import 'rsuite/dist/styles/rsuite-default.css';

/** import dark css */
// import 'rsuite/dist/styles/rsuite-dark.css';

import { Button, Avatar } from 'rsuite';

function App() {
  return (
    <div className="App">
      <Button appearance="primary"> Hello world </Button>
      <Button appearance="link"> link </Button>
      <Avatar size='lg' src="https://lh3.googleusercontent.com/a-/AAuE7mB3DCwh6PZ7EEJM5zFzjoTY_l04YbMFXnKRyfhM6zk"></Avatar>
    </div>
  );
}

export default App;
