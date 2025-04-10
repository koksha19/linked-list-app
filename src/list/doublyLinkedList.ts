import { IList } from '../interfaces/IList';

class Node {
  value: string;
  next: Node | null = null;
  prev: Node | null = null;

  constructor(value: string) {
    this.value = value;
  }
}

export class DoublyLinkedList implements IList {
  private head: Node | null = null;
  private tail: Node | null = null;
  private size: number = 0;

  length(): number {
    return this.size;
  }

  append(element: string): void {
    const newNode = new Node(element);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  insert(element: string, index: number): void {
    this.validate(index, true);
    const newNode = new Node(element);

    if (index === 0) {
      if (this.head) {
        newNode.next = this.head;
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.head = newNode;
    } else if (index === this.size) {
      this.append(element);
      return;
    } else {
      const current = this.getNode(index);
      const prevNode = current!.prev;
      if (prevNode) prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = current;
      current!.prev = newNode;
    }

    this.size++;
  }

  delete(index: number): string {
    this.validate(index);
    let removed: Node;

    if (index === 0) {
      removed = this.head!;
      this.head = this.head!.next;
      if (this.head) this.head.prev = null;
      if (this.size === 1) this.tail = null;
    } else if (index === this.size - 1) {
      removed = this.tail!;
      this.tail = this.tail!.prev;
      if (this.tail) this.tail.next = null;
    } else {
      removed = this.getNode(index)!;
      const prevNode = removed.prev;
      const nextNode = removed.next;
      if (prevNode) prevNode.next = nextNode;
      if (nextNode) nextNode.prev = prevNode;
    }

    this.size--;
    return removed.value;
  }

  deleteAll(element: string): void {
    let current = this.head;
    while (current) {
      const next = current.next;
      if (current.value === element) {
        const index = this.indexOfNode(current);
        if (index !== -1) this.delete(index);
      }
      current = next;
    }
  }

  get(index: number): string {
    this.validate(index);
    return this.getNode(index)!.value;
  }

  clone(): DoublyLinkedList {
    const newList = new DoublyLinkedList();
    let current = this.head;
    while (current) {
      newList.append(current.value);
      current = current.next;
    }
    return newList;
  }

  reverse(): void {
    let current = this.head;
    let prev = null;
    this.tail = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  findFirst(element: string): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === element) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  findLast(element: string): number {
    let current = this.tail;
    let index = this.size - 1;
    while (current) {
      if (current.value === element) return index;
      current = current.prev;
      index--;
    }
    return -1;
  }

  clear(): void {
    this.head = this.tail = null;
    this.size = 0;
  }

  extend(other: DoublyLinkedList): void {
    let current = other.head;
    while (current) {
      this.append(current.value);
      current = current.next;
    }
  }

  private getNode(index: number): Node | null {
    let current: Node | null;
    if (index < this.size / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current!.next;
      }
    } else {
      current = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        current = current!.prev;
      }
    }
    return current;
  }

  private indexOfNode(node: Node): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current === node) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  private validate(index: number, allowEqualLength = false): void {
    if (
      index < 0 ||
      index > this.size ||
      (!allowEqualLength && index === this.size)
    ) {
      throw new Error('Index out of bounds');
    }
  }
}
