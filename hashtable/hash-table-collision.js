class HashTable{
  
    constructor(size){
      this.table = new Array(size)
      this.size = size
    }
    
    hash(key){
      let index=0
      for(let i=0;i<key.length;i++){
        index+= key.charCodeAt(i)
      }
      return index & this.size
    }
    
    set(key, value){
      const index = this.hash(key)
      this.table[index] = value
    }
    
    get(key){
      const index = this.hash(key)
      return this.table[index]
    }
    
    remove(key){
     const index = this.hash(key)
     this.table[index] = undefined
    }
    
    display(){
      for(let i=0; i< this.table.length; i++){
        if(this.table[i])
        console.log(i, this.table[i])
      }
    }
  }
  
  const table = new HashTable(10);
  table.set("name", "Bruce");
  table.set("age", 25);
  table.display();
  console.log(table.get("name"));
  table.set("mane", "Clark");
  table.set("name", "Diana");
  table.display();
  console.log(table.get("mane"));
  table.remove("name");
  table.display();
    