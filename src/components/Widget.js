import React, { Component } from 'react';

import './Widget.css';

export default class Widget extends Component {
  constructor() {
    super();
    this.state = { info: {} };
  }

  componentDidMount() {
    fetch('https://canary.discordapp.com/api/guilds/295341979800436736/widget.json')
      .then(resp => resp.json())
      .then(info => {
        console.log(info);
        this.setState({ info });
      });
  }

  render() {
    const info = this.state.info;

    if (!info.name) {
      return <span>Loading...</span>;
    }

    const members = info.members.map((member) => {
      return (
        <div className='member' key={member.id}>
          <img className='avatar' src={member.avatar_url} alt={`avatar for ${member.username}`}/>
          <div className='name'>
            <span className='username'>{member.username}</span>
            <span className='discrim'>#{member.discriminator}</span>
            {member.bot ? <span className='bot-tag'>BOT</span> : ''}
          </div>
        </div>
      );
    });

    return (
      <div className='widget'>
        <div className='title'>{info.name}</div>
        <div className='contents'>
          {members}
        </div>
      </div>
    );
  }
}
