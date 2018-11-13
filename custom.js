class Utility {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	SimplePrint() {
		console.log('This is a simple print function. Author: '+this.name+ ' Age: '+this.age);
	}
}

let obj = new Utility('anik', 28);
obj.SimplePrint();
let obj2 = new Utility('sen', 27);
obj2.SimplePrint();