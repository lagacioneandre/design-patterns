This is where the Memento pattern meets high-performance engineering. In professional software, saving a massive state (like a 100MB document or a complex 3D scene) every few seconds would crash the application's memory.

To solve this, we use **Incremental Mementos** (also called **Delta Mementos**). Instead of saving the whole object, we save only **what changed** since the last snapshot.

---

### 🚀 Advanced Challenge: The "Pro-Text" Collaborative Editor

**Scenario:**
You are building a high-performance text editor. The document can contain thousands of lines. If you save the entire text in every Memento, the RAM usage will explode. You need to implement a system that saves the "Base State" once and then only saves "Deltas" (changes).

**The Goal:**
Implement a Memento system where the Caretaker must **reconstruct** the state by replaying a sequence of incremental changes.

---

### Technical Requirements

#### 1. The Originator (`Document`)

* **State:** A `content: string`.
* **Methods:**
* `setText(newText)`: Updates the content.
* `save()`: This is the tricky part. It must compare the *current* state with the *previous* state and return a Memento containing only the difference.
* `restore(memento)`: Updates the content based on the delta provided.



#### 2. The Memento (`IncrementalMemento`)

* Instead of storing `content`, it stores a `diff`.
* **Structure suggestion:** ```typescript
{
type: 'INSERT' | 'DELETE',
index: number,
text: string
}
```


```



#### 3. The Caretaker (`VersionControl`)

* **The Challenge:** Since each Memento only has a "piece" of the truth, your `undo` logic becomes an algorithm.
* **Method `undo()`:** To go back, you must start from the **initial empty state** and "play forward" all Mementos in the stack except the last one.
* **Alternatively:** You can implement "Inverse Deltas" (where the Memento knows how to *undo* itself).

---

### 🛠️ Why this is "Advanced"

1. **State Reconstruction:** You are moving away from "State Replacement" to "State Computation."
2. **Memory Optimization:** You'll see that your history array stays very small in terms of bytes.
3. **Algorithmic Thinking:** You need to decide how to represent a "Diff." (Tip: Keep it simple, e.g., "What text was added at what position").

---
