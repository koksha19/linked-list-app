import { IList } from '../interfaces/IList';

export class ArrayList implements IList {
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
    this.validate(index, true);
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

  extend(elements: string[] | IList): void {
    this.list.push(...(elements as string[]));
  }

  private validate(index: number, allowEqualLength: boolean = false) {
    if (
      index < 0 ||
      index > this.list.length ||
      (!allowEqualLength && index === this.list.length)
    ) {
      throw new Error('Inappropriate index');
    }
  }
}
