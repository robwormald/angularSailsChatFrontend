export class AppController {
  constructor(ChatService){
    console.log('app controller!')
    this.chatService = ChatService;
  }
}

AppController.$inject = ['ChatService'];
