import { define, html, parent } from "hybrids";
import AppStore, { removeTodo } from "./AppStore";

function handleRemove(index) {
  return ({ store }) => removeTodo(store, index);
}

export default define({
  tag: "app-todos",
  store: parent(AppStore),
  render: ({ store: { todos } }) => html`
    <h3>Todo List</h3>
    <ul>
      ${todos.map(
        (todo, index) => html`
          <li onclick="${handleRemove(index)}">${todo}</li>
        `
      )}
    </ul>
    ${!todos.length && html` <p>No todos. Add one.</p> `}
  `
});
