var Bag = new Bag(1000);



var tWeightContainer = document.createElement("div");//container for totalweight in document
var tWeightText = document.createElement("p");//paragraph tag for tweight text
tWeightText.id="weightText";
tWeightText.innerHTML = "Total Weight: "+Bag.getTotalWeight();

tWeightContainer.appendChild(tWeightText);
document.body.appendChild(tWeightContainer);


var listContainer = document.createElement("div");//container for entire list on document
listContainer.id = "listContainer";
document.body.appendChild(listContainer);


document.getElementById("addButton").addEventListener("click",addItem);




function addItem(){
	var name = document.getElementById("itemName");
	var weight = document.getElementById("itemWeight");
	var quantity = document.getElementById("itemQuantity");
	//console.log(weight.value);
	
	if(weight.value!=null){
		if(weight.value<0||quantity.value<=0){
		console.log("please enter proper weight and quantity");
		return;
		}
	}

	var local = Bag.checkBagLocation(name.value);

	if(local!=-1){
		Bag.increaseItemQuantity(local, quantity.value);
		document.getElementById(""+local).lastElementChild.innerHTML = ""+Bag.getContents(local).itemQuantity;
	}

	else{
		var newItem = new Item(name.value, weight.value, quantity.value);
		var itemLocal = Bag.addItemToBag(newItem);

		//Need to find an easy way to access an item once it's in the bag
		//Maybe a quicksort by name
		// var listItem = document.createElement("p");
		// listItem.innerHTML = ""+newItem.itemName+"     "+quantity.value;

		var listItem = document.createElement("div");
		listItem.className = "listItem";
		listItem.id = "" + itemLocal;

		var listItemName = document.createElement("p");
		listItemName.innerHTML = ""+newItem.itemName;
		listItemName.className = "Name";
		listItem.appendChild(listItemName);

		var listItemQuantity = document.createElement("p");
		listItemQuantity.innerHTML = ""+newItem.itemQuantity;
		listItemQuantity.className = "Quantity";
		listItem.appendChild(listItemQuantity);
		//var listItemContent = document.createTextNode(newItem.itemName+"     "+quantity.value);
		//listItem.appendChild(listItemContent);
		
		listContainer.appendChild(listItem);
	}

	tWeightText.innerHTML = "Total Weight: "+ Bag.getTotalWeight();

	//name.value = null;
	//weight.value = null;
	quantity.value = 1;
}


