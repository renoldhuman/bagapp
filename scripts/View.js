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


document.getElementById("addItemButton").addEventListener("click",addItemPrompt);
document.getElementById("addButton").addEventListener("click",addItem);
document.getElementById("closeButton").addEventListener("click",closePrompt);

// function makePopUp(w, h, id){
// 	var popup = document.createElement("div");
// 	popup.id = id;
// 	popup.className = "popup";
// 	popup.style.width = "" + w + "px";
// 	popup.style.height = "" + h + "px";
// 	popup.style.marginLeft = ""+ -w/2 + "px";
// 	popup.style.marginTop = ""+ -h/1.6 + "px";
// 	document.body.appendChild(popup);
// }

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

	name.value = null;
	weight.value = null;
	quantity.value = null;

	document.getElementById("popdiv").style.display = "none";
}

function closePrompt(){
	document.getElementById("itemName").value = null;
	document.getElementById("itemWeight").value = null;
	document.getElementById("itemQuantity").value = null;
	document.getElementById("popdiv").style.display = "none";
}


function addItemPrompt(){
	document.getElementById("popdiv").style.display = "initial";
	// makePopUp(300, 150, "popdiv");
	// var form = document.createElement("form");
	
	// var nameBox = document.createElement("input");
	// nameBox.type = "text";
	// nameBox.id = "itemName";
	// nameBox.className = "addItemForm";
	// nameBox.placeholder = "Item Name";
	// form.appendChild(nameBox);

	// var weightBox = document.createElement("input");
	// weightBox.type = "text";
	// weightBox.id = "itemWeight";
	// weightBox.className = "addItemForm";
	// weightBox.placeholder = "Item Weight";
	// form.appendChild(weightBox);

	// var quantityBox = document.createElement("input");
	// quantityBox.type = "text";
	// quantityBox.id = "itemQuantity";
	// quantityBox.className = "addItemForm";
	// quantityBox.placeholder = "Item Quantity";
	// form.appendChild(quantityBox);

	// document.getElementById("popdiv").appendChild(form);
	// var name = document.getElementById("itemName");
	// var weight = document.getElementById("itemWeight");
	// var quantity = document.getElementById("itemQuantity");
	// //console.log(weight.value);
	
	// if(weight.value!=null){
	// 	if(weight.value<0||quantity.value<=0){
	// 	console.log("please enter proper weight and quantity");
	// 	return;
	// 	}
	// }

	// var local = Bag.checkBagLocation(name.value);

	// if(local!=-1){
	// 	Bag.increaseItemQuantity(local, quantity.value);
	// 	document.getElementById(""+local).lastElementChild.innerHTML = ""+Bag.getContents(local).itemQuantity;
	// }

	// else{
	// 	var newItem = new Item(name.value, weight.value, quantity.value);
	// 	var itemLocal = Bag.addItemToBag(newItem);

	// 	//Need to find an easy way to access an item once it's in the bag
	// 	//Maybe a quicksort by name
	// 	// var listItem = document.createElement("p");
	// 	// listItem.innerHTML = ""+newItem.itemName+"     "+quantity.value;

	// 	var listItem = document.createElement("div");
	// 	listItem.className = "listItem";
	// 	listItem.id = "" + itemLocal;

	// 	var listItemName = document.createElement("p");
	// 	listItemName.innerHTML = ""+newItem.itemName;
	// 	listItemName.className = "Name";
	// 	listItem.appendChild(listItemName);

	// 	var listItemQuantity = document.createElement("p");
	// 	listItemQuantity.innerHTML = ""+newItem.itemQuantity;
	// 	listItemQuantity.className = "Quantity";
	// 	listItem.appendChild(listItemQuantity);
	// 	//var listItemContent = document.createTextNode(newItem.itemName+"     "+quantity.value);
	// 	//listItem.appendChild(listItemContent);
		
	// 	listContainer.appendChild(listItem);
	// }

	// tWeightText.innerHTML = "Total Weight: "+ Bag.getTotalWeight();

	// //name.value = null;
	// //weight.value = null;
	// quantity.value = 1;
}




