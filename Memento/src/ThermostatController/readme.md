This is a great step up! Adding a **Redo** stack makes the pattern much more useful and reflects how real-world applications (like Word or Photoshop) actually work.

---

### 🌡️ Exercise: The Smart Thermostat Controller

**Scenario:**
You are building a controller for a **Smart Thermostat**. Users can adjust the temperature and change the operation mode (e.g., "Heat", "Cool", "Eco"). Since users might accidentally set the house to 40°C, they need to be able to **Undo** and **Redo** their settings.

**The Goal:**
Implement the Memento pattern with two stacks in the Caretaker: one for `undo` and one for `redo`.

---

### Technical Requirements

#### 1. The Originator (`Thermostat`)

* **State:** `temperature: number` and `mode: string`.
* **Methods:**
* `setSettings(temp, mode)`: Updates the current state.
* `save(): ThermostatMemento`: Returns a snapshot.
* `restore(memento)`: Restores the state from the snapshot.



#### 2. The Memento (`ThermostatMemento`)

* An immutable object storing the temperature and mode.

#### 3. The Caretaker (`ThermostatHistory`)

* **Two Stacks:** `undoStack: ThermostatMemento[]` and `redoStack: ThermostatMemento[]`.
* **Methods:**
* `save()`: Takes a snapshot from the thermostat and pushes it to the `undoStack`. **Crucial:** When a new save happens, the `redoStack` must be cleared!
* `undo()`:
1. Pops from `undoStack`.
2. Pushes the *current* state (before restoring) into the `redoStack`.
3. Restores the thermostat to the state that is now at the top of the `undoStack`.


* `redo()`:
1. Pops from `redoStack`.
2. Pushes that state back into the `undoStack`.
3. Restores the thermostat to that state.

---

### 🧪 Expected Client Workflow

1. Set Thermostat to **20°C / Eco**  `save()`.
2. Set Thermostat to **25°C / Heat**  `save()`.
3. Set Thermostat to **18°C / Cool**  `save()`.
4. Call `undo()`: Thermostat should return to **25°C / Heat**.
5. Call `redo()`: Thermostat should return to **18°C / Cool**.
6. Call `undo()`, then `undo()`: Thermostat should return to **20°C / Eco**.

---