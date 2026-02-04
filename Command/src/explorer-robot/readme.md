### Exercício: O Robô Explorador

**Cenário:**
Você está desenvolvendo o software de controle para um pequeno robô explorador que se move em um plano bidimensional (eixo X e Y). O robô deve ser capaz de receber ordens de movimento e, caso encontre um obstáculo ou cometa um erro, deve ser capaz de desfazer seus passos um a um.

**Objetivo:**
Implementar o padrão **Command** para controlar a movimentação do robô e gerenciar o histórico de comandos.

**Requisitos do Problema:**

1. **O Receiver (Robô):**
* Crie uma classe `Robo` que mantém sua posição atual (coordenadas `x` e `y`).
* Ela deve ter um método para alterar a posição (ex: `mover(deltaX, deltaY)`) e um método para exibir a posição atual no console.


2. **A Interface (Command):**
* Defina uma interface `Comando` com os métodos `executar()` e `desfazer()`.


3. **Comandos Concretos:**
* Implemente comandos específicos para as direções básicas: `MoverNorte`, `MoverSul`, `MoverLeste` e `MoverOeste`.
* **Importante:** Cada comando deve saber o quanto o robô se moveu para que o método `desfazer()` consiga retornar o robô exatamente para a posição anterior.


4. **O Invoker (Controle Remoto):**
* Crie uma classe `ControleRobo` que armazena o histórico de comandos disparados.
* Ela deve ter um método para enviar um comando (executando-o e guardando-o no histórico) e um método "Botão de Emergência" que desfaz a última ação realizada.


5. **O Cliente:**
* Instancie o robô e o controle.
* Realize uma sequência de movimentos (ex: Norte, Norte, Leste).
* Exiba a posição do robô.
* Acione o botão de desfazer duas vezes e verifique se o robô voltou corretamente para a posição esperada.



---

**Dica:** No `desfazer()`, o comando deve fazer a operação inversa do `executar()`. Se o comando "Norte" adiciona `1` ao eixo `Y`, o seu `desfazer()` deve subtrair `1` do eixo `Y`.

Bom trabalho! Quando terminar ou se travar em alguma parte, pode me enviar o código para revisarmos juntos.