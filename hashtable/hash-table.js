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
      const bucket = this.table[index]
      if(!bucket){
        this.table[index] = [[key,value]]
      }else{
         const sameKeyItem = bucket.find((item)=> item[0] === key)
         if(sameKeyItem){
           sameKeyItem[1] = value
         }else{
           bucket.push([key,value])
         }
      }
    }
    
    get(key){
      const index = this.hash(key)
      const bucket = this.table[index]
      if(bucket){
        const sameKeyItem = bucket.find((item)=> item[0] === key)
        if(sameKeyItem){
          return sameKeyItem[1]
        }
        return null
      }else{
        return null
      }
    }
    
    remove(key){
     const index = this.hash(key)
     const bucket = this.table[index]
     if(bucket){
       const sameKeyItem = bucket.find((item)=> item[0] === key)
       if(sameKeyItem){
         bucket.splice(bucket.indexOf(sameKeyItem),1)
       }
       return null
     }
     return null
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
  
  