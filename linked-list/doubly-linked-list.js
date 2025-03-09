class Node {
    constructor(value){
      this.value = value
      this.prev = null
      this.next = null
    }
  }
  
  class DoublyLinkedList {
    constructor(){
      this.head = null
      this.tail = null
      this.size = 0
    }
  
    isEmpty(){
      return this.size === 0
    }
    
    getSize(){
      return this.size
    }
    
    prepend(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
        this.tail = node
      }else{
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
      this.size++
    }
    
    append(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
        this.tail = node
      }else{
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      }
      this.size++
    }
    
    
    removeFromFront(){
      if(this.isEmpty())
      return null
      else{
        const node = this.head
        this.head = node.next
        node.prev = null
        this.size--
        return node.value
      }
    }
    
    removeFromEnd(){
      if(this.isEmpty()){
        return null
      }else{
        let node = this.tail
        if(this.size === 1){
          this.head = null
          this.tail = null
        }else{
         this.tail = node.prev
         this.tail.next = null
        }
        this.size--
        return node.value
      }
    }
    
    reverse(){
      if(this.isEmpty()){
        return null
      }
      let listValues=''
      let current = this.tail
      while(current){
        listValues += ` ${current.value}`
        current = current.prev
      }
      console.log(listValues)
    }
    
    print(){
      if(this.isEmpty()){
        return null
      }else{
        let listValues=''
        let current = this.head
        while(current){
          listValues += ` ${current.value}`
          current = current.next
        }
        console.log(listValues)
      }
    }
    
  }
  
//   const list = new DoublyLinkedList();
//   list.append(1);
//   list.append(2);
//   list.append(3);
//   list.prepend(0);
//   list.print();
//   list.reverse();
//   list.removeFromEnd();
//   list.print();
//   list.removeFromFront();
//   list.print();
  
  