import { IArrayList } from '../interfaces/IArrayList';

export class ArrayList implements IArrayList {
  private list: string[];

  constructor() {
    this.list = [];
  }

  length(): number {
    return this.list.length;
  }

  append(element: string): void {
    this.list.push(element);
  }

  insert(element: string, index: number): void {
    this.validate(index);
    this.list.splice(index, 0, element);
  }

  delete(index: number): string {
    this.validate(index);
    return this.list.splice(index, 1)[0];
  }

  deleteAll(element: string): void {
    this.list = this.list.filter((e) => e !== element);
  }

  get(index: number): string {
    this.validate(index);
    return this.list[index];
  }

  clone(): ArrayList {
    const newList = new ArrayList();
    newList.extend(this.list);
    return newList;
  }

  reverse(): void {
    this.list.reverse();
  }

  findFirst(element: string): number {
    return this.list.indexOf(element);
  }

  findLast(element: string): number {
    return this.list.lastIndexOf(element);
  }

  clear(): void {
    this.list = [];
  }

  extend(elements: string[] | IArrayList): void {
    this.list.push(...(elements as string[]));
  }

  private validate(index: number) {
    if (index < 0 || index > this.list.length) {
      throw new Error('Inappropriate index');
    }
  }
}
