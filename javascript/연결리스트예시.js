class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.데이터수 = 0;
  }

  length() {
    return this.데이터수;
  }

  toString() {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let 데이터들 = "";
    for (let i = 0; i < this.데이터수; i++) {
      데이터들 += `${순회용현재노드.data}, `;
      순회용현재노드 = 순회용현재노드.next;
    }

    return "[" + 데이터들.slice(0, -2) + "]";
  }

  // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
  fullData() {
    return JSON.parse(this.toString());
  }

  append(data) {
    let 새로운노드 = new Node(data);
    this.tail.next = 새로운노드;
    this.tail = 새로운노드;

    this.데이터수 += 1;
  }

  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(data);
    새로운노드.next = 순회용현재노드.next;
    순회용현재노드.next = 새로운노드;

    this.데이터수 += 1;
  }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();
l.toString();
console.log(l.fullData());
l.insert(3, 1000);
console.log(l.fullData());
