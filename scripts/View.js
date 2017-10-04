var Bag = new Bag(1000);



var tWeightContainer = document.createElement("div");//container for totalweight in document
var tWeightText = document.createElement("p");//paragraph tag for tweight text
tWeightText.id="weightText";
tWeightText.innerHTML = "Total Weight: "+Bag.getTotalWeight(); //gets the totalweight in the bag and appends it to the totalweight box

tWeightContainer.appendChild(tWeightText);
document.body.appendChild(tWeightContainer);//allows the totalweight sting to be viewed on the string


// var listContainer = document.createElement("div");//container for entire list on document
// listContainer.id = "listContainer";
// document.body.appendChild(listContainer);

var itemTable = document.createElement("table")
itemTable.id = "itemTable";
document.body.appendChild(itemTable);

//event listeners for buttons on screen
document.getElementById("addItemButton").addEventListener("click",addItemPrompt);
document.getElementById("addButton").addEventListener("click",addItem);
document.getElementById("closeButton").addEventListener("click",closePrompt);

//Makes a popup appear in the middle of the screen 

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


/*
	Makes a new Item and adds to the bag
	Then creates a listitem adding the newly created items
	name and quanity to the list item and then appends
	the listitem to the listcontainer
*/
function increaseOnScreenQuantity(local, quantity){
	Bag.increaseItemQuantity(local, quantity);
	document.getElementById(""+local).innerHTML = ""+Bag.getContents(local).itemQuantity;
	tWeightText.innerHTML = "Total Weight: "+ Bag.getTotalWeight();
}

function decreaseOnScreenQuantity(local, quantity){
	Bag.decreaseItemQuantity(local, quantity);
	document.getElementById(""+local).innerHTML = ""+Bag.getContents(local).itemQuantity;
	tWeightText.innerHTML = "Total Weight: "+ Bag.getTotalWeight();
}

function createNewListItem(newItem, itemLocal){
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
		
		listContainer.appendChild(listItem);
}

function createNewTableRow(newItem, itemLocal){
	var row = document.createElement("tr");

	var mButton = document.createElement("button");
	var pButton = document.createElement("button");

	mButton.innerHTML = "-";
	pButton.innerHTML = "+";

	var itemName = document.createElement("td");
	itemName.innerHTML = ""+newItem.itemName;
	itemName.style.width = "80%";
	row.appendChild(itemName);

	var minusButton = document.createElement("td");
	minusButton.appendChild(mButton);
	minusButton.style.width = "6.67%";
	minusButton.style.textAlign = "center";
	minusButton.addEventListener("click",function(){decreaseOnScreenQuantity(itemLocal, 1);});
	//minusButton.style.display = "none";
	row.appendChild(minusButton);

	var quantity = document.createElement("td");
	quantity.innerHTML = ""+newItem.itemQuantity;
	quantity.style.width = "6.67%";
	quantity.style.textAlign = "center";
	quantity.id = ""+itemLocal;
	row.appendChild(quantity);

	var plusButton = document.createElement("td");
	plusButton.appendChild(pButton);
	plusButton.style.width = "6.67%";
	plusButton.style.textAlign = "center";
	plusButton.addEventListener("click",function(){increaseOnScreenQuantity(itemLocal, 1);});
	row.appendChild(plusButton);

	itemTable.appendChild(row);
}

function addItem(){
	var name = document.getElementById("itemName");
	var weight = document.getElementById("itemWeight");
	var quantity = document.getElementById("itemQuantity");
	
	if(weight.value!=null){
		if(weight.value<0||quantity.value<=0){
		console.log("please enter proper weight and quantity");
		return;
		}
	}

	var local = Bag.checkBagLocation(name.value);

	if(local!=-1){
		increaseOnScreenQuantity(local, quantity.value);
		// Bag.increaseItemQuantity(local, quantity.value);
		// document.getElementById(""+local).innerHTML = ""+Bag.getContents(local).itemQuantity;
	}

	else{
		var newItem = new Item(name.value, weight.value, quantity.value);
		var itemLocal = Bag.addItemToBag(newItem);
		createNewTableRow(newItem, itemLocal);
		tWeightText.innerHTML = "Total Weight: "+ Bag.getTotalWeight();
		//createNewListItem(newItem, itemLocal);
	}

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
}




