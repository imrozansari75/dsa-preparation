// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at end
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

  // ❌ Delete head
  deleteHead() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    this.head = this.head.next;
  }

  // ❌ Delete end
  deleteEnd() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // If only one node
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;

    // Stop at second-last node
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  // Print list
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " → ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

// ================== USAGE ==================

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Initial list:");
list.print();

list.deleteHead();
console.log("After deleting head:");
list.print();

list.deleteEnd();
console.log("After deleting end:");
list.print();
