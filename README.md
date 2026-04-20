# Binary-String-DFA-Simulator-TOC
Binary String DFA Simulator is a simple web application that demonstrates a Deterministic Finite Automaton (DFA). It allows users to enter a binary input and visually see how the DFA processes the string step by step, finally showing whether it is accepted or rejected.
# Binary String DFA Simulator

## Project Topic
Simulation of a **Deterministic Finite Automaton (DFA)** from the **Theory of Computation** syllabus.

This application simulates a DFA that accepts all binary strings that **end with "01"**.

---

## App Name
**Binary String DFA Simulator**

---

## Objective
The main objective of this project is to demonstrate how a DFA works by visually simulating state transitions for a given binary input string.

The simulator helps users:
- Understand DFA state transitions clearly
- Check whether a binary string is accepted or rejected
- Visualize how automata process strings step by step

---

## Concept Used
### Deterministic Finite Automaton (DFA)

A DFA is a finite-state machine used in Theory of Computation to recognize patterns in strings.

This project uses a DFA for the language:

**L = { w ∈ {0,1}* | w ends with "01" }**

That means the automaton accepts only those binary strings whose last two characters are **01**.

Examples:
- Accepted: `01`, `1101`, `10001`
- Rejected: `10`, `111`, `000`

---

## Components of the Project

### 1. HTML File
The HTML file builds the structure of the web application.

It contains:
- Project heading
- Input field for binary string
- Simulate button
- Status message area
- DFA state diagram display

### 2. CSS File
The CSS file is used for styling the project.

It provides:
- Centered layout
- State circle design
- Accept state double border
- Active state highlight animation
- Success and failure colors
- Clean user interface

### 3. JavaScript File
The JavaScript file contains the logic of the DFA.

It performs:
- Input validation
- State transition processing
- Step-by-step simulation
- Acceptance/rejection checking
- Dynamic UI updates

---

## DFA Details

### States
- **q0** → Start state
- **q1** → State when `0` is seen
- **q2** → Accept state when the string ends with `01`

### Input Alphabet
`{0,1}`

### Transition Function

| Current State | Input 0 | Input 1 |
|--------------|---------|---------|
| q0           | q1      | q0      |
| q1           | q1      | q2      |
| q2           | q1      | q0      |

### Start State
**q0**

### Accept State
**q2**

---

## Working of the Application
1. The user enters a binary string in the input box.
2. When the **Simulate** button is clicked, the DFA starts from **q0**.
3. The input string is read one character at a time.
4. For each character, the simulator moves to the next state based on the transition table.
5. Each state is highlighted visually during the simulation.
6. After the full string is processed:
   - If the final state is **q2**, the string is **accepted**
   - Otherwise, it is **rejected**

---

## Example Test Cases

### Accepted Strings
- `01`
- `1101`
- `1001`
- `11101`

### Rejected Strings
- `0`
- `1`
- `10`
- `111`
- `000`

---

## Files in the Project

### 1. `index.html`
Contains the structure of the web page.

### 2. `stylek.css`
Contains all styling for the application.

### 3. `appk.js`
Contains DFA simulation logic and interactivity.

---

## Technologies Used
- HTML
- CSS
- JavaScript

---

## Advantages of the Project
- Easy to understand for beginners
- Clearly shows DFA transitions
- Interactive and user-friendly
- Helps in visual learning of automata concepts

---

## Learning Outcome
By doing this project, we can understand:
- What a DFA is
- How state transitions happen
- How strings are accepted or rejected
- How Theory of Computation concepts can be implemented in a real application

---

## Future Enhancements
This project can be improved further by adding:
- Transition arrows with labels `0` and `1`
- Animation for each transition path
- Support for multiple DFA problems
- NFA simulator
- PDA or Turing Machine simulator

---

## Conclusion
This project successfully simulates a DFA that accepts binary strings ending with `"01"`. It is a simple and effective implementation of a Theory of Computation concept using web technologies. The project makes learning automata easier through visual simulation and interactive execution.

---

## Author
Koushik Chakapuram

## Subject
Theory of Computation

## Submission Type
Mini Project 
