import { ArrayList } from './arrayList';

const newList = new ArrayList();

newList.append('a');
newList.append('b');
newList.append('c');
newList.append('d');

console.log(newList.length());

newList.extend(['e', 'f', 'g']);

console.log(newList.length());

newList.delete(10);
console.log(newList.length());
