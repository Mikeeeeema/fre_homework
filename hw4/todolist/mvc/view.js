export const View = (() => {
  const domstr = {
    inputBox: "todolist-input",
    listContainer: "todolist-container",
    deleteBtn: "delete-btn",
    //mycode
    listDetail: "list-detail",
  };

  const createTmp = (todoArr) => {
    let tmp = "";
    todoArr.forEach((todo) => {
      tmp +=
        // `
        //   	<li>
        // 			<span>${todo.id}-${todo.title}</span>
        // 			<button class='delete-btn' id='${todo.id}'>X</button>
        // 		</li>
        // `;

        //mycode
        // `
        //   <li class='list-detail' id='${todo.id}'>
        `
              <li class='list-detail ${
                todo.completed ? "completed" : ""
              }' id='${todo.id}'>

				<span>${todo.id}-${todo.title}</span>
				<button class='delete-btn' id='${todo.id}'>X</button>
			</li>
	`;
    });
    return tmp;
  };

  const updateTodoStyle = (todo) => {
    const listItem = document.getElementById(todo.id);
    // console.log(todo);
    if (todo.completed) {
      // console.log(listItem.classList);
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  return { domstr, render, createTmp, updateTodoStyle };
})();
