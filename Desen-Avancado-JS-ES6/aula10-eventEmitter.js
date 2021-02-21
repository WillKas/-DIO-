// EventEmitter é algo exclusivo do Node

const EventEmitter = require('events')

class Users extends EventEmitter {
    userLogged(data) {
       setTimeout(() => {
        this.emit('User logged', data)
       }, 2000)
        
    }
}

const users = new Users()

users.once('User logged', data => {
    console.log(data);
})

users.userLogged({ user: 'Willian Mateus Betim' })
users.userLogged({ user: 'Vicente Rodrigues' })


//outra bem conhecida a api do Browser conhecida como EventListener(EventTarget)