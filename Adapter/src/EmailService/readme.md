O Cenário:

Interface Nova: Seu sistema de e-commerce espera um EmailService com o método send(to: string, subject: string, body: string).

Sistema Legado (SMTP-Old): Uma classe antiga que não tem método send. Ela tem:

setReceiver(email: string)

setHeader(text: string)

setMessageContent(content: string)

dispatch()

O Desafio: Crie o SmtpAdapter que implementa a Interface Nova e, dentro do método send, faz as 4 chamadas necessárias do sistema legado na ordem correta.