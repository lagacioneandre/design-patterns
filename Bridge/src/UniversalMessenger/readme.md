## Desafio: O Mensageiro Universal (Universal Messenger)

### Contexto

Sua empresa possui um sistema de notificações que envia mensagens de dois tipos: **Notificações Comuns** e **Notificações de Emergência**. Inicialmente, as mensagens são enviadas apenas por **E-mail**. No entanto, a empresa planeja expandir para **SMS** e **Push Notification** (Firebase) em breve.

Se usarmos herança, teremos `EmailEmergencyNotification`, `SmsEmergencyNotification`, etc. Sua missão é usar o **Bridge** para que possamos criar novos tipos de mensagens e novos canais de envio de forma independente.

---

### Requisitos do Desafio

#### 1. O Implementador (CommunicationChannel)

* Crie uma interface chamada `NotificationChannel`.
* Ela deve ter o método `sendData(message: string): void`.
* Implemente dois canais concretos: `EmailChannel` e `SMSChannel`. (Cada um com seu `console.log` específico).

#### 2. A Abstração (Notification)

* Crie uma classe abstrata chamada `Notification`.
* Ela deve conter a **Ponte**: uma referência privada/protegida para `NotificationChannel`.
* O construtor deve receber o canal.
* Deve ter um método abstrato `send(): void`.

#### 3. Abstrações Refinadas (Tipos de Mensagem)

* **UserNotification:** Uma mensagem simples. O método `send()` apenas chama o canal.
* **EmergencyNotification:** Uma mensagem crítica. O método `send()` deve transformar a mensagem em **CAIXA ALTA** e adicionar um prefixo `[ALERTA DE SEGURANÇA]` antes de enviar pelo canal.

---

### Cenário de Teste (Para validação)

1. Crie um canal de **E-mail**.
2. Crie uma **Notificação de Usuário** usando o canal de E-mail e envie a mensagem: *"Seu boleto chegou"*.
3. Crie uma **Notificação de Emergência** usando o **mesmo canal de E-mail** e envie: *"Tentativa de login suspeita"*.
4. Agora, crie um canal de **SMS** e envie a mesma **Notificação de Emergência** por ele.

---

### O que você deve observar?

* Note que a classe `EmergencyNotification` não sabe se está enviando por SMS ou E-mail; ela foca apenas na regra de negócio (formatar o texto de emergência).
* Note que o `SMSChannel` não sabe se a mensagem é de emergência ou comum; ele foca apenas no transporte.

**Dica de Arquiteto:** Tente pensar em como seria fácil adicionar um `WhatsAppChannel` agora sem tocar em nenhuma classe de Notificação.

**Quando estiver pronto, mande sua implementação para avaliarmos se a "Ponte" está bem construída!**