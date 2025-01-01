import { inject, Injectable } from '@angular/core';
import { Todo } from './todo.interfaces';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//?  不是很理解是什么意思
// ({
//   providedIn: 'root',
// })
@Injectable()
export class TodoService {
  todos: Todo[] = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ];

  url = 'https://jsonplaceholder.typicode.com/todos';
  baseUrl = 'https://jsonplaceholder.typicode.com';
  todoPath = 'todos';
  userPath = 'users';
  // moviesUrl = 'https://api.themoviedb.org/3/discover';
  //在 Angular 和 RxJS 中，命名约定中带有 $ 后缀的变量通常表示它是一个可观察对象（Observable）。这种命名方式有助于开发者快速识别出哪些变量是可观察对象，从而更容易理解代码的行为和数据流。
  todo$ = new BehaviorSubject(this.todos);

  //more popular way
  // private http = inject(HttpClient);
  constructor(private http: HttpClient) {}

  gettodo() {
    // return this.http.get<Todo[]>(this.url);
    return this.http.get<any>(`${this.baseUrl}/${this.userPath}`).pipe(
      map((users: any[]) => {
        return users.map((user) => ({ email: user.email }));
      })
    );
  }
}
