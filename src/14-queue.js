// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = ListNode(element) || {
      value: element,
      next: null,
      previus: null,
    };

    newNode.tail = this.tail;

    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (!this.head) return null;

    const ret = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.previus = null;
    else this.tail = null;

    this.length--;
    return ret;
  }
}

module.exports = Queue;
