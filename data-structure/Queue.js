import LinkedList from "./LinkedList.js";

export default class Queue {
  list = new LinkedList()

  enqueue(value) {
    this.list.append(value)
  }

  dequeue() {
    return this.list.removeAt(0)
  }

  peek() {
    return this.list.getAt(0);
  }

  isEmpty() {
    return this.list.isEmpty();
  }
}
