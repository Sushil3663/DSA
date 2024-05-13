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
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++;
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

let List = new LinkList(3);
console.log(List.isEmpty())
console.log(List.getSize())
List.prepend(2)
List.print()

List.prepend(3)
List.print()

List.prepend(4)
List.print()


