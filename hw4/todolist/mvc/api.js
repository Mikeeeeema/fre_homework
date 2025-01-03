export const API = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  // const baseUrl = "http://localhost:4232";
  const todoUrl = "todos";

  const getTodos = () =>
    fetch([baseUrl, todoUrl].join("/")).then((response) => response.json());

  const addTodo = (newtodo) =>
    fetch([baseUrl, todoUrl].join("/"), {
      method: "POST",
      body: JSON.stringify(newtodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, todoUrl, id].join("/"), {
      method: "DELETE",
    });

  //mycode
  const updateTodo = (newtodo) =>
    // fetch([baseUrl, todoUrl].join("/"), {
    //mycode
    fetch([baseUrl, todoUrl, newtodo.id].join("/"), {
      method: "PUT",
      body: JSON.stringify(newtodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

  return {
    getTodos,
    deleteTodo,
    addTodo,
    //mycode
    updateTodo,
  };
})();
