class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        console.log(node);
        if (this.isEmpty()) {
            this.head = node
            // console.log(this.head);

        }
        else {
            node.next = this.head
            // console.log(node.next);
            this.head = node
            // console.log(node);

        }
        this.size++;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
            // console.log(this.head);
        }
        else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            console.log(prev);
            prev.next = node
            // this.head = node

        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        }
        else {

            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++;
            // console.log(node)
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
            // if (prev.next === null) {
            //     this.head = null
            // }
            // else {
            //     this.head = this.head.next
            // }
        }

        else {
            let prev = this.head

            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next

        }
        this.size--;
        return removeNode.value

    }

    print() {
        if (this.isEmpty()) {
            console.log('Empty List')
        }
        else {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += curr.value;
                curr = curr.next
            }
            console.log(list);
        }
    }

}

let List = new LinkList();
// console.log(List.isEmpty())
// console.log(List.getSize())
// List.prepend(2)
// List.print()

// List.prepend(3)
// List.print()

// List.append(2)
// List.append(3)
// List.append(4)
List.insert(10, 0)
List.print()

List.insert(20, 0)
List.print()

List.insert(30, 1)
List.print()

List.insert(40, 2)
List.print()

console.log(List.removeFrom(2))
List.print()
List.print()

// console.log(List.removeFrom(2))

// List.print()
// List.print()
// console.log(List.getSize())


