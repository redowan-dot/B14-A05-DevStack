# DevStack - Tech Stack Builder

A simple web application where developers can explore different technologies, compare them, and build their custom tech stack.

---

## Links
- **GitHub Repository**: https://github.com/redowan-dot/B14-A05-DevStack
- **Live Site**: https://precious-biscuit-b76c57.netlify.app/
---

## Technologies Used
- **React.js**
- **Tailwind CSS**
- **Vite**
- **React-Toastify**
- **JSON** (Local dataset)

---

## 3 Core Features
1. **Interactive Stack Builder**: Users can click "Add to Stack" on any card to add it to their sidebar. Once added, the button shows "✓ Added to Stack" and becomes disabled.
2. **Duplicate Alert & Toasts**: Shows toast notifications when items are added, removed, or cleared. If a user tries to add the same technology again, a warning alert pops up.
3. **Remove & Clear All**: Users can remove individual items using the ✕ button, or clear the whole stack at once with the "Remove All" button.

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/redowan-dot/B14-A05-DevStack.git
   cd B14-A05-DevStack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX is a syntax extension that lets us write HTML-like code inside JavaScript. It makes writing UI components easier and more readable.

### 2. What is the difference between props and state?
**Answer:**
- **Props**: Data passed down from a parent component to a child. It is read-only and cannot be changed by the child.
- **State**: Data stored and managed inside a component. When state changes, React re-renders the UI to show the new data.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` is a React Hook that lets functional components store and update dynamic data. In this project, I used it in `App.jsx` to store the list of technologies, the loading status, and the user's selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` runs side effects like fetching data. I used it with an empty array `[]` to fetch `technologies.json` once when the page loads, so it doesn't repeatedly fetch in an infinite loop.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` to track which items change, get added, or get deleted. This helps React update only the necessary parts of the DOM efficiently.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
**Answer:** Conditional rendering means showing different UI elements based on a condition (like an `if/else`). In `YourStack.jsx`, if the stack is empty (`count === 0`), it shows the "Your stack is empty" message. Otherwise, it shows the list of selected cards.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child**: Passed via props (for example, `<TechnologyCard tech={tech} />`).
- **Child to Parent**: The parent passes a function down as a prop, and the child calls that function with data when an event occurs (for example, clicking "Add to Stack").
