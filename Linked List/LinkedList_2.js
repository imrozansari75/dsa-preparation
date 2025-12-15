class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserts a new node with the given data at the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Inserts a new node with the given data at the beginning of the list
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Inserts a new node with the given data at the specified index
  insertAtIndex(data, index) {
  // Case 1: insert at head
  if (index === 0) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  const newNode = new Node(data);
  let current = this.head;
  let count = 0;

  // Move to (index - 1) node
  while (current && count < index - 1) {
    current = current.next;
    count++;
  }

  if (!current) {
    console.log("Index out of bounds");
    return;
  }

  // Insert node
  newNode.next = current.next;
  current.next = newNode;
}

}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.insertAtHead(5);
list.insertAtHead(0);

list.insertAtIndex(15, 2); // Insert 15 at index 2

console.log(list.head);
