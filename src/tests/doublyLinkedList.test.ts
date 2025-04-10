import { describe, expect, test, beforeEach } from '@jest/globals';
import { DoublyLinkedList } from '../list/doublyLinkedList';

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  test('Initial length is 0', () => {
    expect(list.length()).toBe(0);
  });

  test('Append elements', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('c');
  });

  test('Insert at valid index', () => {
    list.append('a');
    list.append('b');
    list.insert('c', 1);
    expect(list.get(1)).toBe('c');
  });

  test('Insert at invalid index', () => {
    expect(() => list.insert('x', -1)).toThrow();
    expect(() => list.insert('x', 1)).toThrow();
  });

  test('Delete at valid index', () => {
    list.append('a');
    list.append('b');
    expect(list.delete(1)).toBe('b');
    expect(list.length()).toBe(1);
  });

  test('Delete at invalid index', () => {
    expect(() => list.delete(0)).toThrow();
  });

  test('Delete all elements by value', () => {
    list.append('a');
    list.append('b');
    list.append('a');
    list.deleteAll('a');
    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe('b');
  });

  test('Get at invalid index', () => {
    expect(() => list.get(0)).toThrow();
  });

  test('Clone list', () => {
    list.append('x');
    list.append('y');
    const clone = list.clone();
    expect(clone.length()).toBe(2);
    expect(clone.get(0)).toBe('x');
    expect(clone.get(1)).toBe('y');
    clone.append('z');
    expect(list.length()).toBe(2);
    expect(clone.length()).toBe(3);
  });

  test('Reverse list', () => {
    list.append('a');
    list.append('b');
    list.append('c');
    list.reverse();
    expect(list.get(0)).toBe('c');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('a');
  });

  test('Find first and find last', () => {
    list.append('x');
    list.append('y');
    list.append('x');
    expect(list.findFirst('x')).toBe(0);
    expect(list.findLast('x')).toBe(2);
    expect(list.findFirst('z')).toBe(-1);
  });

  test('Clear list', () => {
    list.append('a');
    list.append('b');
    list.clear();
    expect(list.length()).toBe(0);
  });

  test('Extend list', () => {
    const other = new DoublyLinkedList();
    other.append('b');
    other.append('c');
    list.append('a');
    list.extend(other);
    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('c');
  });
});
