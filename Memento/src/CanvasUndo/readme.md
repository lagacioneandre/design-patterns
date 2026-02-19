### 🎨 Exercise: The Digital Canvas Undo System

**Scenario:**
You are developing a simplified **Graphic Design Tool** (like a mini Photoshop or Canva). Users can add shapes to a canvas and change the background color. Since users often make mistakes, they need a reliable **Undo** system to revert the canvas to a previous state.

**Your Objective:**
Implement the Memento pattern to allow the user to save "snapshots" of their canvas and restore them exactly as they were.

---

### Technical Requirements

#### 1. The Originator (`Canvas`)

This class represents the current state of the drawing. It should have:

* **State:** A list of strings called `shapes` (e.g., `["Circle", "Square"]`) and a string `backgroundColor`.
* **Methods:**
* `addShape(shape: name)`: Adds a new shape to the list.
* `setBackground(color: string)`: Updates the canvas color.
* `save(): CanvasMemento`: Captures the current shapes and color into a Memento object.
* `restore(memento: CanvasMemento)`: Replaces the current list and color with the data from the memento.



#### 2. The Memento (`CanvasMemento`)

An immutable class that stores the snapshot.

* It should store a **copy** of the shapes list (be careful with object references in JavaScript/TypeScript!) and the background color.
* It should be "read-only" for everyone except the Originator.

#### 3. The Caretaker (`CanvasHistory`)

This class manages the history stack.

* **Methods:**
* `push(memento)`: Adds a new snapshot to the history.
* `undo()`: Pops the last snapshot from the history and tells the canvas to restore it.



#### 4. The Client

In your main script:

1. Create a `Canvas` and a `CanvasHistory`.
2. Add a shape ("Circle"), change the color to "Red", and **save**.
3. Add another shape ("Triangle"), change the color to "Blue", and **save**.
4. Add a final shape ("Star").
5. Perform two **Undos** and verify if the canvas returns to the "Circle / Red" state.

---

### 🌟 Bonus Challenge (Level: Advanced)

Implement a **Redo** functionality. This will require a second stack in your Caretaker to store the mementos that were "undone," allowing the user to move forward in time again until a new change is made.

---