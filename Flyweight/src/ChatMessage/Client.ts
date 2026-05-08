import { ChatMessage } from "./ChatMessage";
import { UserStyleFactory } from "./UserStyleFactory";

class WhatsAppGroup {
    private messages: ChatMessage[] = [];

    createMessage(text: string, timestamp: string, username: string, avatar: string, headerColor: string) {
        const user = UserStyleFactory.getUserData('Alice', 'avatar_alice.png', 'red');
        const message = new ChatMessage(text, timestamp, user);
        this.messages.push(message);
    }

    print() {
        this.messages.forEach(message => message.print());
    }
}

const whatsAppGroup = new WhatsAppGroup();

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