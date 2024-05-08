class QueueOptomized {
    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }


    Enqueue(element) {
        this.items[this.rear] = element
        this.rear++;
        console.log(this.rear)

    }
    Dequeue() {
        let item = this.items[this.front];
        delete this.items[this.front]
        this.front++;
        console.log(this.front)
        return item
    }
    isEmpty() {
        return this.rear === this.front
    }

    peek() {
        return this.items[this.front]

    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this.items)
    }


}

const queue = new QueueOptomized()
queue.Enqueue("sk")
queue.Enqueue("pk")
queue.Enqueue("ck")
queue.Dequeue()


queue.print()
console.log(queue.peek())
console.log(queue.size())