var list = [];
var itemList = [];

var tWeightContainer = document.createElement("div");
var tWeightText = document.createElement("p");
tWeightContainer.appendChild(tWeightText);
document.body.appendChild(tWeightContainer);

var listContainer = document.createElement("div");
document.body.appendChild(listContainer);

function viewBag(){
	Bag.getContents();
}

itemList.push(new newItem("sword", 10));
itemList.push(new newItem("helmet", 5));
itemList.push(new newItem("bedroll", 2));

for(var i = 0; i < itemList.length; i++){
	addItemToBag(itemList[i], 1);
	console.log(itemList[i]);
}

// for(var i=0; i<list.length; i++){
// 	var listItem = document.createElement("p");
// 	var listItemContent = document.createTextNode(list[i].getItemName()+"     "+list[i].getItemQuantity());
// 	listItem.appendChild(listItemContent);
// 	listItem.id=""+i;
// 	listContainer.appendChild(listItem);
// 	//console.log(list[i].getItemName()+"     "+list[i].getItemQuantity());

// }
var totalWeightText = document.createTextNode("Total Weight: "+getTotalWeight());
tWeightText.appendChild(totalWeightText);
//console.log("Total Weight: "+totalWeight);
