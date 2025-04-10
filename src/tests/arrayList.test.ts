import { describe, expect, test, beforeEach } from '@jest/globals';
import { ArrayList } from '../list/arrayList';

let list: ArrayList;

beforeEach(() => {
  list = new ArrayList();
});

describe('ArrayList', () => {
  test('Initial length is 0', () => {
    expect(list.length()).toBe(0);
  });

  test('Append elements', () => {
    list.append('a');
    list.append('b');
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
  });

  test('Insert at valid index', () => {
    list.append('a');
    list.insert('b', 1);
    list.insert('c', 1);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('c');
    expect(list.get(2)).toBe('b');
  });

  test('Insert at invalid index', () => {
    expect(() => list.insert('a', -1)).toThrow();
    expect(() => list.insert('a', 1)).toThrow();
  });

  test('Delete at valid index', () => {
    list.append('a');
    list.append('b');
    const deleted = list.delete(0);
    expect(deleted).toBe('a');
    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe('b');
  });

  test('Delete at invalid index', () => {
    expect(() => list.delete(0)).toThrow();
  });

  test('Delete all elements', () => {
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
    const cloned = list.clone();
    list.append('y');
    expect(cloned.length()).toBe(1);
    expect(cloned.get(0)).toBe('x');
  });

  test('Reverse list', () => {
    list.append('a');
    list.append('b');
    list.reverse();
    expect(list.get(0)).toBe('b');
    expect(list.get(1)).toBe('a');
  });

  test('Find first and find last', () => {
    list.append('a');
    list.append('b');
    list.append('a');
    expect(list.findFirst('a')).toBe(0);
    expect(list.findLast('a')).toBe(2);
    expect(list.findFirst('z')).toBe(-1);
  });

  test('Clear list', () => {
    list.append('a');
    list.clear();
    expect(list.length()).toBe(0);
  });

  test('Extend list', () => {
    list.append('a');
    list.extend(['b', 'c']);
    expect(list.length()).toBe(3);
    expect(list.get(2)).toBe('c');
  });
});
