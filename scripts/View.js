//var list = [];//array containing all Items
var totalWeight = 0;//total current weight
var itemCount = 0;

var tWeightContainer = document.createElement("div");//container for totalweight in document
var tWeightText = document.createElement("p");//paragraph tag for tweight text
tWeightContainer.appendChild(tWeightText);
document.body.appendChild(tWeightContainer);
var totalWeightText = document.createTextNode("Total Weight: "+totalWeight);
tWeightText.appendChild(totalWeightText);


var listContainer = document.createElement("div");//container for entire list on document
document.body.appendChild(listContainer);

document.getElementById("button").addEventListener("click",addItem);

/*Constructor for new Item
*Takes a name weight and quantity
*Methods to add and drop 1 of an item
*Getter Methods for each of the Reference Type Properties
*/

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

// function addItem(itemName, itemWeight, itemQuantity){
// 	var newItem = new Item(itemName, itemWeight, itemQuantity);
// 	list.push(newItem);
// 	totalWeight+=itemWeight*itemQuantity;
// }

function addItem(){
	var name = document.getElementById("itemName");
	var weight = document.getElementById("itemWeight");
	var quantity = document.getElementById("itemQuantity");

	var newItem = new Item(name.value, weight.value, quantity.value);
	totalWeight+=newItem.getItemWeight()*newItem.getItemQuantity();

	itemCount++;

	var listItem = document.createElement("p");
	var listItemContent = document.createTextNode(newItem.getItemName()+"     "+newItem.getItemQuantity());
	listItem.appendChild(listItemContent);
	listItem.id=""+itemCount;
	listContainer.appendChild(listItem);

	tWeightText.removeChild(tWeightText.childNodes[0]);
	totalWeightText = document.createTextNode("Total Weight: "+totalWeight);
	tWeightText.appendChild(totalWeightText);

	name.value = null;
	weight.value = null;
	quantity.value = null;

}

// addItem("Sword", 10, 1);
// addItem("Helmet", 5, 1);
// addItem("Bedroll", 2, 1);


// for(var i=0; i<list.length; i++){
// 	var listItem = document.createElement("p");
// 	var listItemContent = document.createTextNode(list[i].getItemName()+"     "+list[i].getItemQuantity());
// 	listItem.appendChild(listItemContent);
// 	listItem.id=""+i;
// 	listContainer.appendChild(listItem);
// 	//console.log(list[i].getItemName()+"     "+list[i].getItemQuantity());

// }

//console.log("Total Weight: "+totalWeight);
