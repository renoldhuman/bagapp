var contents = [];
var totalWeight = 0;

function getContents(){
	return contents;
}

function getTotalWeight(){
	return totalWeight;
}

function addItemToBag(toAdd, addAmount){
	if(addAmount <= 0 || toAdd == null){
		//throw error here
	}

	totalWeight += toAdd.itemWeight * addAmount;

	contents.push(new bagItem(toAdd, addAmount));
}

function bagItem(item, amount){
	this.item = item;
	this.quantity = amount; 

	this.getItemQuantity = function(){
		return ""+this.quantity;
	}
}