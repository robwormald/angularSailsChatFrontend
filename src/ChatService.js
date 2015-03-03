const url = 'http://localhost:1337/'

import {Channel} from './Channel';

export class ChatService {
  constructor($sailsSocket){
    this.socket = $sailsSocket;

    this.socket.subscribe('message',(msg)=>{
      var channel = this.channels.find((channel)=>{
        return channel.id === msg.data.channel;
      });
      channel.messages.push(msg.data);
    })

    this.loadChannels().then((channels)=>{
      return channels.map((channel)=> new Channel(channel,this.socket));
    })
    .then((channels)=>{
      this.channels = channels;
    })
  }

  loadChannels(){
    return this.socket.get('http://localhost:1337/channel')
    .then((res)=> {
      return res.data;
    });
  }


}
