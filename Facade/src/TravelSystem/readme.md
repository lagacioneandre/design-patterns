## Desafio: O Portal de Reservas de Viagens (Travel Facade)

### Contexto
Você está criando um portal onde o usuário pode reservar uma viagem completa com um clique. Para isso, o sistema precisa conversar com três empresas diferentes (APIs externas):
1.  **AirlineService:** Para reservar o voo.
2.  **HotelService:** Para reservar o quarto.
3.  **CarRentalService:** Para alugar um carro.

### O Diferencial: Injeção de Dependência
Desta vez, a sua `TravelFacade` **não deve dar `new`** em nenhuma dessas classes. Ela deve recebê-las prontas no construtor.

---

### Requisitos do Desafio

#### 1. Os Subsistemas (Crie classes simples)
* `AirlineService`: Método `bookFlight(origin: string, dest: string)`.
* `HotelService`: Método `bookRoom(city: string)`.
* `CarRentalService`: Método `rentCar(city: string)`.

#### 2. A Fachada (`TravelFacade`)
* Deve receber as três instâncias acima no seu `constructor`.
* Deve ter um método principal: `bookCompleteTrip(city: string)`.
* **Regra de Negócio:** Se o voo falhar (simule um retorno booleano), ela não deve tentar reservar o hotel nem o carro.

#### 3. O Cliente
* O Cliente deve instanciar os serviços.
* O Cliente deve instanciar a Fachada passando os serviços.
* O Cliente chama `facade.bookCompleteTrip("Paris")`.

---

### Por que fazer assim?
Imagine que você queira testar se a Fachada para de reservar o hotel quando o voo falha. Com as dependências no construtor, você pode passar um "Mock" (um objeto falso) do `AirlineService` que sempre retorna erro, sem precisar de uma conexão real com uma companhia aérea.
