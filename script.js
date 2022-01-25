'use strict';
// const arr = ['a', 'b', 'c'];

// arr.push('d'); //O(1)
// arr.pop(); //O(1)

// arr.unshift('0'); // O(n)

// arr.shift(); //O(n)

// arr.splice(1,0,'hello') //O(n)

// console.log(arr);

//Reverse A String

const reverseStr = function (str) {
	// const strArr = str.split('');
	let revStr = '';
	str.split('').forEach((char) => {
		revStr = char + revStr;
	});
	return revStr;
};

// console.log(reverseStr('I am ZIN PAING HTET'));

// console.log([1, 2, 3, 4].reverse().join(''));

// const mergeSortedArray = function (arr1, arr2) {
// 	if (arr1.length === 0 || arr2.length === 0) {
// 		return;
// 	}
// 	let arr = arr1.concat(arr2);
// 	let sortedArr = [];
// 	console.log(arr);
// 	// arr.forEach((ele, i) => {
// 	// 	console.log(`${ele} at index ${i}`);
// 	// });
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				let a = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = a;
// 			}
// 		}
// 	}
// 	console.log(arr);
// 	console.log(sortedArr);
// };

// mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);

// const myArr = [1, 2, 3, 4];

// myArr[0] = myArr[2];
// console.log(myArr);

// class buildArray {
// 	constructor() {
// 		this.length = 0;
// 		this.data = {};
// 	}
// 	push(item) {
// 		this.data[this.length] = item;
// 		this.length++;
// 	}
// 	pop() {
// 		delete this.data[this.length - 1];
// 		this.length--;
// 	}
// 	unshift(item) {
// 		console.log(this.length - 1);
// 		for (let i = this.length; i > 0; i--) {
// 			this.data[i] = this.data[i - 1];
// 		}
// 		this.data[0] = item;
// 		this.length++;
// 	}
// 	shift() {
// 		for (let i = 0; i < this.length; i++) {
// 			this.data[i] = this.data[i + 1];
// 		}
// 		delete this.data[this.length - 1];
// 		this.length--;
// 	}
// }

// let myArr = new buildArray();
// myArr.push('a');
// myArr.push('b');
// myArr.push('c');
// myArr.pop();
// myArr.unshift('Hello');
// myArr.unshift('i am unshit');
// myArr.unshift('hey it is me');
// myArr.shift();
// console.log(myArr.data);
// console.log(`curr length : ${myArr.length}`);

//Hash Table

class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % this.data.length;
	}
	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
			this.data[address].push([key, value]);
		} else {
			this.data[address].push([key, value]);
		}
	}
	get(key) {
		let allArr = [];
		let myArr = [];
		let value = '';
		for (let i = 0; i < this.data.length; i++) {
			this.data[i] && allArr.push(this.data[i]);
		}
		myArr = allArr.find((arr) => arr[0][0] === key);
		myArr ? (value = myArr[0][1]) : (value = 'Cannot find your key');
		return value;
	}
	keys() {
		let allArr = [];
		let myArr = [];
		let value = '';
		for (let i = 0; i < this.data.length; i++) {
			this.data[i] && allArr.push(this.data[i]);
		}

		myArr = allArr.map((arr) => {
			return arr[0][0];
		});
		return myArr;
	}
	values() {
		let allArr = [];
		let myArr = [];
		let value = '';
		for (let i = 0; i < this.data.length; i++) {
			this.data[i] && allArr.push(this.data[i]);
		}

		myArr = allArr.map((arr) => {
			return arr[0][1];
		});
		return myArr;
	}
}

const myHashTable = new HashTable(100);
// console.log(myHashTable._hash('iamzinphtet'));

myHashTable.set('greet', 'Hello i am greeting you');
myHashTable.set('age', 21);
myHashTable.set('class', '4 BE EC 30');
// console.log(myHashTable.data);
// console.log(myHashTable.get('blah'));
// console.log(myHashTable.get('class'));
// console.log(myHashTable.get('name'));
// console.log(myHashTable.get('greet'));
// console.log(myHashTable.get('age'));
// console.log(myHashTable.get('class'));
// myHashTable.keys();
// console.log(myHashTable.keys());
// console.log(myHashTable.values());

//First Recurring element

function recurr(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		//O(n)
		newArr.push(arr[i]);
		for (let j = 0; j < newArr.length; j++) {
			//O(n)
			if (arr[i + 1] === newArr[j]) return arr[i + 1];
		}
	}
	return undefined;
}
// recurr([]) O(n^2)

// console.log(recurr([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(recurr([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(recurr([3, 4, 5, 6]));

//LinkedLit

// 10 --> 5 --> 16
const linkedListObj = {
	head: {
		value: 10,
		next: {
			value: 5,
			next: {
				value: 16,
				next: null,
			},
		},
	},
};

class LinkedList {
	// _nextVal = {};
	_Arr = [];
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this._Arr.push(value);

		this.tail = this.head;
		// this.tail = this.head;
		this.length = 1;
	}

	append(appendVal) {
		const newNode = {
			value: appendVal,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		this._Arr.push(appendVal);
	}

	prepend(prepenVal) {
		const newNode = {
			value: prepenVal,
			next: this.head,
		};
		this.head = newNode;
		this.length++;
		this._Arr.unshift(prepenVal);
	}
	printList() {
		let arr = [];
		let curNode = this.head;
		while (curNode !== null) {
			arr.push(curNode.value);
			curNode = curNode.next;
		}
		return arr;
	}
	insert(index, insertVal) {
		if (index === 0) this.prepend(insertVal);
		if (index > this.length) this.append(insertVal);

		if (index > 0 && index <= this.length) {
			let myNode = this.head;
			let beforNode;
			for (let i = 0; i < index; i++) {
				if (i == index - 1) beforNode = myNode;
				myNode = myNode.next;
			}
			let oldNode = myNode;
			myNode = {
				value: insertVal,
				next: oldNode,
			};
			beforNode.next = myNode;
		}
	}
}

const myLinkedList = new LinkedList(10);

// console.log(myLinkedList.head.value);
// console.log(myLinkedList.head.next);
// console.log(myLinkedList.tail.value);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);

// console.log(myLinkedList.printList());
// console.log(myLinkedList);

//My Stack

class newNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.top = null;
		(this.bottom = null), (this.length = 0);
	}

	peek() {
		return this.top;
	}
	push(value) {
		const Node = new newNode(value);
		if (this.length === 0) {
			this.top = Node;
			this.bottom = Node;
		} else {
			let holding = this.top;
			this.top = Node;
			this.top.next = holding;
		}
		this.length++;
		return this;
	}
	pop() {
		let holdig = this.top;
		if (this.length === 1) {
			this.bottom = null;
		}
		this.top = this.top.next;
		this.length--;
		return this;
	}
}

const myStack = new Stack();
// myStack.push(4);
// myStack.push(5);
// myStack.push(6);
// myStack.push(7);
// // console.log(myStack);
// myStack.pop();
// // myStack.pop();
// // myStack.pop();
// // myStack.pop();
// console.log(myStack.peek());
// console.log(myStack);

class StackArr {
	constructor() {
		this.data = [];
		this.length = 0;
		this.top = null;
		this.bottom = null;
	}

	peek() {
		return this.data[this.length];
	}
	push(value) {
		if (this.length === 0) {
			this.data.push(value);
			this.top = this.data[this.length];
			this.bottom = this.data[this.length];
		} else {
			this.data.push(value);
			this.top = value;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 1) {
			this.bottom = null;
		}
		this.data.length = this.length - 1;
		this.top = this.data[this.data.length - 1];
		this.length--;
		return this;
	}
}

const myStackArr = new StackArr();
// myStackArr.push(4);
// myStackArr.push(5);
// myStackArr.push(6);
// myStackArr.push(7);
// myStackArr.pop();
// myStackArr.pop();
// myStackArr.pop();
// myStackArr.pop();
// console.log(myStackArr);

//Queues
class queNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new queNode(value);

		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			const holding = this.last;
			this.last = newNode;
			this.last.next = holding;
		}
		this.length++;
		return this;
	}
	dequeue() {
		let myNode = this.last;
		for (let i = 0; i < this.length - 1; i++) {
			myNode = myNode.next;
		}
		console.log(myNode);
	}
}

const myQueue = new Queue();
// myQueue.enqueue('hello');
// myQueue.enqueue('second');
// myQueue.enqueue('third');
// myQueue.enqueue('fourth');
// myQueue.dequeue();

// console.log(myQueue);

class treeNode {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new treeNode(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			let curNode = this.root;
			while (true) {
				if (value < curNode.value) {
					if (!curNode.left) {
						curNode.left = newNode;
						return this;
					}
					curNode = curNode.left;
				} else {
					if (!curNode.right) {
						curNode.right = newNode;
						return this;
					}
					curNode = curNode.right;
				}
			}
		}
	}

	lookup(value) {
		let curNode = this.root;

		while (curNode) {
			if (value < curNode.value) {
				curNode = curNode.left;
			} else if (value > curNode.value) {
				curNode = curNode.right;
			} else if (value === curNode.value) {
				return curNode;
			}
		}
		if (!curNode) return false;
	}
}

const myTree = new Tree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(20);
myTree.insert(70);
// myTree.lookup(2);
console.log(myTree.lookup(2));
console.log(myTree.lookup(5));
console.log(myTree.lookup(70));
console.log(myTree.lookup(20));
console.log(myTree.lookup(1120));
console.log(myTree);
