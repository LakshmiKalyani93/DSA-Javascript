class Node {
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class LinkedList {
    constructor(){
      this.head = null
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
      }else{
        node.next = this.head
        this.head = node
      }
      this.size++
    }
    
    append(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else{
        let prev = this.head
        while(prev.next){
          prev = prev.next
        }
        prev.next = node
      }
      this.size++
    }
    
    
    insert(value, index){
      if(index<0 || index > this.size){
        return 
      }
      if(index === 0){
        this.prepend(value)
      }else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0;i< index-1;i++){
          prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
      }
    }
    
    removeFrom(index){
      if(index<0 || index >= this.size){
        return
      }
      let removeNode
      if(index === 0){
        removeNode = this.head
        this.head = null
      }else{
        let prev = this.head
        for(let i=0;i< index-1;i++){
          prev = prev.next
        }
        removeNode = prev.next
        prev.next = removeNode.next
      }
       this.size--
      return removeNode.value
    }
    
    remove(value) {
      if(index<0 || index >= this.size){
        return
      }
      if(this.head.value === value){
        this.head = null
        this.size--
        return value;
      }else{
        let prev = this.head
        while(prev.next && prev.next.value !== value){
          prev = prev.next
        }
        if(prev.next){
          let removeNode = prev.next
          prev.next = removeNode.next
          this.size--
          return value;
        }
        return null
      }
    }
    
    search(value){
      if(this.isEmpty()){
        return -1
      }
      let prev = this.head
      let i=0 
      while(prev){
        if(prev.value === value){
          return i;
        }
        i++
        prev = prev.next
      }
      return -1
    }
    
    reverse(){
      if(this.isEmpty()){
        return null
      }
      let prev = null
      let current = this.head
      while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
      }
      this.head = prev
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
  
  //Commenting for testing purposes
  
  // const list = new LinkedList()
  
  // console.log("list is empty? ", list.isEmpty())
  // console.log("list size ", list.getSize())
  
  // list.append(10)
  // list.append(20)
  // list.append(30)
  
  // console.log(list.getSize())
  // list.print()
  
  // console.log(list.search(30))
  // list.reverse()
  // list.print()
  
  