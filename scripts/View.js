var Bag = new Bag(1000);



var tWeightContainer = document.createElement("div");//container for totalweight in document
var tWeightText = document.createElement("p");//paragraph tag for tweight text
tWeightText.id="weightText";
tWeightText.innerHTML = "Total Weight: "+Bag.getTotalWeight();

tWeightContainer.appendChild(tWeightText);
document.body.appendChild(tWeightContainer);


var listContainer = document.createElement("div");//container for entire list on document
document.body.appendChild(listContainer);


document.getElementById("button").addEventListener("click",addItem);




function addItem(){
	var name = document.getElementById("itemName");
	var weight = document.getElementById("itemWeight");
	var quantity = document.getElementById("itemQuantity");

	var newItem = new Item(name.value, weight.value);
	Bag.addItemToBag(newItem, quantity.value);

	//Need to find an easy way to access an item once it's in the bag
	//Maybe a quicksort by name
	var listItem = document.createElement("p");
	var listItemContent = document.createTextNode(newItem.itemName+"     "+quantity.value);
	listItem.appendChild(listItemContent);
	listContainer.appendChild(listItem);

	tWeightText.innerHTML = "Total Weight: "+ Bag.getTotalWeight();

	name.value = null;
	weight.value = null;
	quantity.value = null;
}


