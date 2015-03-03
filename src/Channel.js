export class Channel {
  constructor(data,socket){
    this.socket = socket;
    this.id = data.id;
    this.channel_name = data.channel_name;
    this.messages = [];
  }

  sendMessage(newMessage){
    newMessage.channel = this.id;
    this.socket.post(`/message`,newMessage)
    .then((res)=>{
      this.messages.push(res.data);
    }).catch((err)=>console.log(err))
  }

  loadMessages(){
    return this.socket.get(`/message`,{params: { channel: this.id}})
    .then((res)=>{
      this.messages = res.data;
    })
  }
}
