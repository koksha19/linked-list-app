# Linked lists practice

## Description

This repo contains code for TypeScript application which helps 
to manipulate two types of lists:
- Native JS array based list
- Doubly linked list

Supported list operations:
- length() - returns the length of given list
- append() - adds a new node at the end of the list
- insert() - inserts a new node at given index
- delete() - deletes a node at given index
- deleteAll() - deletes all nodes that match the given value
- get() - returns a value of the node at given index
- clone() - returns a copy of given list
- reverse() - reverses a given list
- findFirst() - finds the first element that matches the given value
- findLast() - finds the last element that matches the given value
- clear() - clears the given list
- extend() - extends the given list with another list

## Variant calculation

My group list number is 3

Variant = 3 mod 4 = `3`

## Project installation and setup

To try this app Node.js has to be installed on your computer.
To check if it is installed run the following command:

```bash
node -v
```

If you get the version number, you're good to go. Otherwise, visit
[Node.js](https://nodejs.org/en/download) for installation.

### Cloning
After that, make a local copy of this repository by running this command:

```bash
git clone https://github.com/koksha19/linked-list-app.git
```

### Installing dependencies

To install required dependencies run: 

```bash
npm install
```

## Building the project

To build the project run:

```bash
npm run build
```

## Testing 

To run Jest tests execute:

```bash
npm test
```

## Failed tests commit

This repo contains [failed CI commit](https://github.com/koksha19/linked-list-app/commit/6c6542d72b381e3dc179152d9d74b36f0ee56540), which shows that our tests work
correctly

## Conclusion

Having implemented this project, I improved my linked lists knowledge and
ability to write TypeScript code. This project helped me to:
- improve my testing skills. Writing tests turned out to be a very
effective way to avoid mistakes and errors. Well-tested units ensure the 
correct functionality of the program and make enhancing the project
much easier;
- become better at integrating CI workflow;
- understand the nature of linked lists;