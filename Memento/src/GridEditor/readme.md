### 🗺️ Novo Desafio: O Editor de Mapas (Grid Editor)

**Cenário:**
Você está criando um editor para um jogo 2D. O mapa é uma grade (grid) de 10x10. Cada célula pode ter um tipo de terreno: `'G' (Grama)`, `'W' (Água)`, ou `'M' (Montanha)`.

**Por que é Incremental?**
Em vez de salvar o mapa inteiro (100 células) a cada clique, você vai salvar apenas a coordenada que mudou.

#### 1. O Originator (`GameMap`)

* **Estado:** Uma matriz (array de arrays) `10x10` preenchida inicialmente com `'G'`.
* **Métodos:**
* `setTile(x, y, type)`: Muda o terreno em uma posição específica.
* `save()`: Retorna um Memento com a mudança que acabou de acontecer.
* `restore(memento)`: Aplica aquela mudança específica de volta ao mapa.



#### 2. O Memento (`TileMemento`)

* **Propriedades:** `x: number`, `y: number`, `type: string`.
* *Dica:* Aqui o memento guarda o **novo** valor para o `Redo` ou para o `Replay`.

#### 3. O Caretaker (`MapHistory`)

* **Histórico:** Uma lista de `TileMemento`.
* **Undo:** Para desfazer, você deve resetar o mapa para tudo 'G' (Grama) e aplicar todos os mementos da lista **exceto o último**.

---

### 🛠️ Estrutura sugerida para começar

```typescript
export class TileMemento {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly type: string
    ) {}
}

export class GameMap {
    private grid: string[][] = Array(10).fill(null).map(() => Array(10).fill('G'));

    // Método para o Undo usar
    public reset() {
        this.grid = Array(10).fill(null).map(() => Array(10).fill('G'));
    }

    public setTile(x: number, y: number, type: string) {
        this.grid[y][x] = type;
        console.log(`Tile em [${x},${y}] alterado para ${type}`);
    }

    // Como você sabe qual foi a última mudança para o save()? 
    // Dica: Guarde as coordenadas do último clique em variáveis privadas.
}

```