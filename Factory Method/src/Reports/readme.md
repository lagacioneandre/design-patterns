### Desafio: Sistema de Exportação de Relatórios

**Cenário:**
Você está trabalhando em um sistema de RH (Recursos Humanos). O sistema precisa exportar relatórios de funcionários. Inicialmente, o sistema deve suportar **PDF** e **HTML**, mas o arquiteto do projeto avisou que no futuro poderemos ter exportação para **CSV** ou **JSON**.

**Seu objetivo:**
Implementar o **Factory Method** para que a lógica de "gerar o arquivo e disponibilizar para download" seja comum, mas o formato do arquivo seja decidido pelas subclasses.

---

### Requisitos Técnicos

#### 1. O Produto (`IDocument`)

Crie uma interface chamada `IDocument` que defina o que um documento faz:

* `render(content: string): void`: Este método deve simular a renderização do conteúdo no formato específico (ex: imprimir no console "Renderizando PDF com o conteúdo: ...").

#### 2. Produtos Concretos

Crie as classes que implementam a interface:

* **`PDFDocument`**
* **`HTMLDocument`**

#### 3. O Criador (`DocumentGenerator`)

Esta é a classe abstrata (o "Gerente"). Ela deve ter:

* **O Factory Method:** `abstract createDocument(): IDocument`.
* **O Método de Negócio:** `export(content: string): void`.
* Este método deve chamar o `createDocument()` para obter um documento.
* Depois, deve chamar o `render(content)` desse documento.
* Por fim, deve imprimir algo como: "Documento pronto para download!".



#### 4. Criadores Concretos

Crie as fábricas específicas:

* **`PDFGenerator`**: Retorna um `PDFDocument`.
* **`HTMLGenerator`**: Retorna um `HTMLDocument`.

#### 5. O Cliente

No seu arquivo principal:

* Crie uma função que receba qualquer `DocumentGenerator`.
* Execute essa função passando o `PDFGenerator` e depois o `HTMLGenerator`.
