class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.capacityLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.capacityLength === this.capacity;
    }

    isEmpty() {
        return this.capacityLength === 0
    }

    Enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.capacityLength += 1
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }

    Dequeue() {
        if (!this.isEmpty()) {
            let data = this.items[this.front]
            this.items[this.front] = null
            this.front = (this.front + 1) % this.capacity
            this.capacityLength -= 1
            if (this.isEmpty()) {
                this.rear = -1;
                this.front = -1;
            }
            return data

        }
        else {
            return null
        }

    }

    peek() {
        if (!this.isEmpty()) {
            let data = this.items[this.front]
            return data
        }
        else {
            return null
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        }
        else {
            let i;
            let str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str = str + this.items[i] + " "
            }
            str = str + this.items[i]
            console.log(str)
            console.log(this.items);
            console.log(this.items.toString());

        }
    }
}

let circularQueue = new CircularQueue(3)
console.log(circularQueue.isEmpty())
console.log(circularQueue.isFull())

circularQueue.Enqueue(1)
circularQueue.Enqueue(2)
circularQueue.Enqueue(3)

console.log(circularQueue.isEmpty())
console.log(circularQueue.isFull())
console.log(circularQueue.peek())
circularQueue.print()

