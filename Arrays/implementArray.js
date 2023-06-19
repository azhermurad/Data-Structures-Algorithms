class MyArray {
  constructor() {
    this.length=0
    this.data={}
    console.log("constructure",this)
  }
  get(index){
    return this.data[index] //0(1)
  }
  push(value){
    this.data[this.length]=value; // 0(1)
    this.length++
    return this.length;
  }
  pop(){
    let lastItem = this.data[this.length -1]
    delete this.data[this.length -1] //0(1)
    this.length--;
    return lastItem;
  }
  delete(index){ // 0(n)
    let item = this.data[index];
    for(let i=index;i<this.length;i++){
      console.log("a",i,this.length)
      this.data[i]=this.data[i+1]
    }
    delete this.data[this.length -1]
    this.length--
    
    
  }
}


let newArray = new MyArray()
newArray.push("a")
newArray.push("b")
newArray.push("c")
newArray.push("d")
// console.log(a.pop())
newArray.delete(1)
console.log(newArray)