class Node {
    constructor(value, previous, next) {
        this.value = value || null;
        this.previous = previous || null;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToTail(value) {
        if(this.size === 0) {
            this.head = this.tail = new Node(value);
        } else {
            this.tail.next = new Node(value, this.tail, null);
            this.tail = this.tail.next;
        }
        this.size++;
    }

    addToHead(value) {
        if(this.size === 0) {
            this.head = this.tail = new Node(value);
        } else {
            this.head.previous = new Node(value, null, this.head);
            this.head = this.head.previous;
        }
        this.size++;
    }

    add(value) {
        this.addToTail(value);
    }

    removeFromTail() {
        if(this.size === 0) {
            throw 'Empty List'
        }
        this.tail = this.tail.previous;
        if(this.tail) this.tail.next = null;
        this.size--;
        if(this.size === 0) this.head = null;
    }

    removeFromHead() {
        if(this.size === 0) {
            throw 'Empty List'
        }
        this.head = this.head.next;
        if(this.head) this.head.previous = null;
        --this.size;
    }

    remove() {
        this.removeFromTail();
    }

    removeNode(node) {
        let currrentNode = this.head
        while(currrentNode.value === node.value) {
            console.log(currrentNode.value);
            currrentNode = currrentNode.next;
        }
    }
    
    print() {
        let currrentNode = this.head
        while(currrentNode) {
            console.log(currrentNode.value);
            currrentNode = currrentNode.next;
        }
    }
}

// Testing
const newLinkedList = new LinkedList();
newLinkedList.add('hello');
newLinkedList.add('world');
newLinkedList.add('world1');
newLinkedList.add('world2');
newLinkedList.addToHead('world3');
newLinkedList.removeFromTail();
newLinkedList.removeFromTail();
newLinkedList.removeFromTail();
newLinkedList.removeFromTail();
newLinkedList.removeFromTail();
newLinkedList.print();
console.log(newLinkedList);

