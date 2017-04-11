var inquirer = require("inquirer");

function BasicCard(front, back,) {
	this.front = front;   //question portion card
	this.back = back;     //answer portion of card
	this.printCard = function () {
		if (process.argv[2] == "print cards") {
			console.log ("Question :" + this.front + "\nAnswer :" + this.back);
		}
	}
};


// or instead of printcard build the print function as a prototype
inquirer.prompt {

}