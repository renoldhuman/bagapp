var list = [];
var totalWeight = 0;

var tWeightContainer = document.createElement("div");
var tWeightText = document.createElement("p");
tWeightContainer.appendChild(tWeightText);
document.body.appendChild(tWeightContainer);

var listContainer = document.createElement("div");
document.body.appendChild(listContainer);
function Item(itemName, itemWeight, itemQuantity){
	this.itemName = itemName;
	this.itemWeight = itemWeight;
	this.itemQuantity = itemQuantity;

	this.addItem = function(){
		this.itemQuantity++;
		this.itemWeight+=itemWeight;
	}

	this.dropItem = function(){
		this.itemQuantity--;
		this.itemWeight-=itemWeight;
	}

	this.getItemWeight = function(){
		return ""+itemWeight;
	}

	this.getItemName = function(){
		return ""+itemName;
	}

	this.getItemQuantity = function(){
		return ""+itemQuantity;
	}
}

function addItem(itemName, itemWeight, itemQuantity){
	var newItem = new Item(itemName, itemWeight, itemQuantity);
	list.push(newItem);
	totalWeight+=itemWeight*itemQuantity;
}

addItem("Sword", 10, 1);
addItem("Helmet", 5, 1);
addItem("Bedroll", 2, 1);


for(var i=0; i<list.length; i++){
	var listItem = document.createElement("p");
	var listItemContent = document.createTextNode(list[i].getItemName()+"     "+list[i].getItemQuantity());
	listItem.appendChild(listItemContent);
	listItem.id=""+i;
	listContainer.appendChild(listItem);
	//console.log(list[i].getItemName()+"     "+list[i].getItemQuantity());

}
var totalWeightText = document.createTextNode("Total Weight: "+totalWeight);
tWeightText.appendChild(totalWeightText);
//console.log("Total Weight: "+totalWeight);
