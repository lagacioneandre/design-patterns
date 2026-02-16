**"Intermediário-Avançado"**.

Neste desafio, vamos simular um sistema de **Integração de Gateways de Pagamento**. O que o torna mais difícil é que cada provedor tem requisitos de autenticação diferentes e a classe "Pai" (o Criador) terá uma lógica de fluxo de transação muito mais rigorosa, incluindo tratamento de erros e logs.

---

### Desafio: Sistema Global de Pagamentos (Multi-Gateway)

**Cenário:**
Sua plataforma de e-commerce precisa processar pagamentos. No Brasil, usamos o **MercadoPago**, nos EUA usamos o **Stripe** e para transações internacionais genéricas usamos o **PayPal**. Cada um desses serviços tem uma forma diferente de processar e validar pagamentos.

**Seu objetivo:**
Implementar o Factory Method para que o sistema de vendas possa processar pagamentos sem saber *qual* gateway está sendo usado, mas garantindo que todos os passos de segurança sejam seguidos.

---

### Requisitos Técnicos

#### 1. O Produto (`IPaymentProcessor`)

Interface que define os métodos:

* `authenticate(): boolean`: Simula a conexão com a API do banco.
* `executePayment(amount: number): boolean`: Realiza a cobrança de fato.

#### 2. Produtos Concretos (Gateways)

* **`StripeProcessor`**: Precisa de uma `apiKey` no construtor.
* **`PayPalProcessor`**: Precisa de um `user` e `password` no construtor.
* **`MercadoPagoProcessor`**: Precisa de um `token` de acesso.

> *Dica: No `executePayment`, cada um deve imprimir sua mensagem específica e retornar `true`.*

#### 3. O Criador Abstrato (`PaymentGateway`)

Aqui está a dificuldade. O método de negócio `processTransaction(amount: number)` deve seguir este fluxo **exato**:

1. Validar se o `amount` é maior que 0. Se não, lançar um erro.
2. Chamar o Factory Method `getProcessor()` para obter o objeto concreto.
3. Chamar o `authenticate()` do processador.
4. Se autenticar com sucesso, chamar o `executePayment(amount)`.
5. Se o pagamento falhar ou a autenticação falhar, imprimir uma mensagem de erro crítica.
6. **Log Final:** Imprimir o status final da transação (Sucesso ou Falha).

#### 4. Criadores Concretos

* **`StripeGateway`**, **`PayPalGateway`**, **`MercadoPagoGateway`**.
* Cada um deles deve passar as credenciais necessárias para seus respectivos produtos no momento do `new`.

#### 5. O Cliente

O cliente deve ser capaz de receber uma lista de diferentes `PaymentGateway` e processar uma transação de $100 em cada um deles de forma polimórfica.