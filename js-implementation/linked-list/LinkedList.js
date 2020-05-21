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
        this.pointer;
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

    next() {
        let returnValue;
        if(this.pointer === null) {
            throw 'No More Elements';
        }
        if(this.pointer === undefined) {
            this.pointer = this.head;
        }
        returnValue = this.pointer.value;
        this.pointer = this.pointer.next;
        return returnValue;
    }

    hasNext() {
        return this.pointer !== null;
    }

    removeIndex(index) {
        if(index < 0) {
            throw 'Incorrect Integer'
        }
        if(index >= this.size) {
            throw 'Size exceeded'
        }
        
        let currrentNode = this.head
        for(let indexFlag = 0; indexFlag < index; indexFlag++) {
            currrentNode = currrentNode.next;
        }
        let {previous, next} = currrentNode;
        previous.next = next;
        next.previous = previous;
        currrentNode = null;
        this.size--;
    }

    // [Symbol]
    
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
newLinkedList.add(5);
newLinkedList.add({ obj: 45 });
newLinkedList.print();
console.log();

console.log(newLinkedList.next());
console.log(newLinkedList.next());
console.log(newLinkedList.hasNext());
