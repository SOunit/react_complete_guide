class Todo {
  // typescript needs property definition before initialize in constructor
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString();
  }
}

export default Todo;
