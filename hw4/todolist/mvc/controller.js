import { Model } from "./model.js";
import { View } from "./view.js";

export const Controller = ((model, view) => {
  const state = new model.State();
  const todoContainer = document.querySelector(`.${view.domstr.listContainer}`);
  const inputbox = document.querySelector(`.${view.domstr.inputBox}`);

  const deleteTodo = () => {
    todoContainer.addEventListener("click", (e) => {
      if (e.target.className === view.domstr.deleteBtn) {
        state.todolist = state.todolist.filter(
          (todo) => +todo.id !== +e.target.id
        );
        model.deleteTodo(e.target.id);
      }
    });
  };

  //question：为什么这里面叫addTodo 要和api里面的addTodo重合
  //而且这里面的addTodo我感觉调用的事api里面的function
  const addTodo = () => {
    inputbox.addEventListener("keyup", (e) => {
      if (e.key === "Enter" && e.target.value.trim() !== "") {
        const newtodo = new model.Todo(e.target.value);

        model.addTodo(newtodo).then((todo) => {
          state.todolist = [todo, ...state.todolist];
        });

        e.target.value = "";
      }
    });
  };

  //mycode: updateTodo
  const updateTodo = () => {
    todoContainer.addEventListener("click", (e) => {
      const listItem = e.target.closest(`.${view.domstr.listDetail}`);
      if (listItem && listItem.className !== view.domstr.deleteBtn) {
        // console.log(listItem.id);
        state.todolist = state.todolist.map((todo) => {
          if (+todo.id === +listItem.id) {
            todo.completed = !todo.completed;

            // console.log(todo);
            model.updateTodo(todo).then((todo) => {
              view.updateTodoStyle(todo);
            });
          }
          return todo;
        });
      }
      const newtodo = state.todolist.find((todo) => +todo.id === +listItem.id);
      // console.log(newtodo);

      // model.updateTodo(newtodo).then((todo) => {
      //   view.updateTodoStyle(todo);
      // });
    });
  };

  const init = () => {
    model.getTodos().then((todolist) => {
      state.todolist = todolist.reverse();
    });
  };

  const bootstrap = () => {
    init();
    deleteTodo();
    addTodo();
    //mycode
    updateTodo();
  };

  return { bootstrap };
})(Model, View);
