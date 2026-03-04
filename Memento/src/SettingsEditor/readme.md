## Desafio: O Editor de Preferências de Sistema (Settings Editor)

### Contexto

Você está criando um painel de "Configurações de Perfil" para um aplicativo. O usuário pode alterar várias opções antes de decidir se quer **Salvar** ou **Cancelar** as alterações. Se ele clicar em cancelar, todas as mudanças feitas naquela sessão devem ser descartadas, voltando ao estado original de quando ele abriu o painel.

### O Problema

Diferente do desafio anterior, aqui não queremos desfazer "passo a passo". Queremos apenas ter a capacidade de restaurar o estado completo caso o usuário não goste das alterações feitas.

### Requisitos do Desafio

1. **O Originator (`UserSettings`):**
* Deve conter as propriedades: `theme` (string, ex: "light" ou "dark"), `fontSize` (number) e `notifications` (boolean).
* Deve ter um método `save()` que cria e retorna um objeto **Memento** contendo todos esses valores.
* Deve ter um método `restore(memento)` que substitui todos os seus valores atuais pelos valores contidos no memento.


2. **O Memento (`SettingsMemento`):**
* Um objeto imutável que armazena o estado completo de `UserSettings` em um determinado momento.


3. **O Caretaker (`SettingsHistory`):**
* Neste nível básico, ele precisa apenas armazenar **um único** memento (o estado inicial).
* Ele será responsável por solicitar o memento ao `UserSettings` quando o painel for aberto e devolvê-lo caso o usuário clique em "Cancelar".



### Cenário de Teste

1. **Início:** O sistema começa com `theme: "light", fontSize: 12, notifications: true`.
2. **Backup:** O Caretaker salva o estado inicial.
3. **Alteração:** O usuário muda para `dark`, `fontSize: 18` e desliga as notificações.
4. **Consulta:** Verifique se o objeto `UserSettings` reflete as novas mudanças.
5. **Cancelamento:** O Caretaker solicita o `restore` passando o memento salvo no passo 2.
6. **Verificação Final:** O `UserSettings` deve ter voltado exatamente para `light`, `12` e `true`.

---

### Por que este desafio é bom para começar?

* **Simplicidade:** Você lida com o estado inteiro, o que é mais fácil de debugar do que incrementos.
* **Conceito Puro:** Ele demonstra o propósito original do padrão: manter o encapsulamento (o Caretaker não mexe nos valores, apenas guarda o "pacote").
