"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChatMessage_1 = require("./ChatMessage");
var UserStyleFactory_1 = require("./UserStyleFactory");
var WhatsAppGroup = /** @class */ (function () {
    function WhatsAppGroup() {
        this.messages = [];
    }
    WhatsAppGroup.prototype.createMessage = function (text, timestamp, username, avatar, headerColor) {
        var user = UserStyleFactory_1.UserStyleFactory.getUserData('Alice', 'avatar_alice.png', 'red');
        var message = new ChatMessage_1.ChatMessage(text, timestamp, user);
        this.messages.push(message);
    };
    WhatsAppGroup.prototype.print = function () {
        this.messages.forEach(function (message) { return message.print(); });
    };
    return WhatsAppGroup;
}());
var whatsAppGroup = new WhatsAppGroup();
whatsAppGroup.createMessage('Oi Pessoal!', '10:00', 'Alice', 'avatar_alice.png', 'red');
whatsAppGroup.createMessage('Tudo bem?', '10:01', 'Alice', 'avatar_alice.png', 'red');
whatsAppGroup.createMessage('Opa!', '10:02', 'Bob', 'avatar_bob.png', 'blue');
whatsAppGroup.createMessage('Tudo bem e vc?', '10:03', 'Bob', 'avatar_bob.png', 'blue');
whatsAppGroup.createMessage('Eu estou bem tbm, vc foi na escola hoje Bob?', '10:04', 'Alice', 'avatar_alice.png', 'red');
whatsAppGroup.createMessage('Fui sim', '10:05', 'Bob', 'avatar_bob.png', 'blue');
whatsAppGroup.createMessage('Teve alguma atividade de casa?', '10:06', 'Alice', 'avatar_alice.png', 'red');
whatsAppGroup.createMessage('Teve sim, e para as atividades da pagina 14 do livro de matematica', '10:07', 'Bob', 'avatar_bob.png', 'blue');
whatsAppGroup.createMessage('Ok, entendi. Muito obrigada Bob', '10:08', 'Alice', 'avatar_alice.png', 'red');
whatsAppGroup.createMessage('Por nada Alice.', '10:09', 'Bob', 'avatar_bob.png', 'blue');
whatsAppGroup.print();
