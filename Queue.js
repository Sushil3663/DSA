class Queue {
    constructor() {
        this.items = [];

    }

    Enqueue(element) {
        this.items.push(element);
    }

    Dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        else {
            return null;
        }
    }
    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString());
    }
}

const obj = new Queue();
obj.Enqueue(2);
obj.Enqueue(4);
obj.Enqueue(5);
obj.Enqueue(6);
console.log(obj.Dequeue());

console.log(obj.isEmpty());
console.log(obj.size());
console.log(obj.peek());
obj.print()