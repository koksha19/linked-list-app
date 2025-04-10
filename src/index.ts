import { ArrayList } from './list/arrayList';
import { DoublyLinkedList } from './list/doublyLinkedList';

const newList = new DoublyLinkedList();

newList.append('a');
newList.append('b');
newList.append('c');
newList.append('d');

console.log(newList.clone());
