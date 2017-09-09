import React, { Component } from 'react';
import './App.css';

import Widget from './Widget';
import Button from './Button';
import SplitButton from './SplitButton';

class App extends Component {
  render() {
    const left = ['https://git.memework.org', 'Gogs'];
    const right = ['https://github.com/memework', 'GitHub'];
    return (
      <div className='app'>
        <Widget/>
        <article>
          <h1>Memework</h1>
          <p>
            We are a group of passionate developers and Discord enthusiasts formed
            from B1nzy's testing server. We also like memes, and have no sense
            of professionalism.
          </p>
          <small>We are not affiliated with Discord in any way.</small>

          <div className='buttons'>
            <Button url='discord.gg/yWqJ3D9'>Join the Discord Server</Button>
            <SplitButton left={left} right={right}/>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
