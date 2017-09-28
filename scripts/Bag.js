function Bag(maxWeight){

	 this.contents = [];
	 this.totalWeight = 0;
	 this.maxWeight = maxWeight;


	this.getContents = function (i){
		if(arguments.length==0){
			return this.contents;
		}
		else return this.contents[i];
	}

	this.getTotalWeight= function(){
		return this.totalWeight;
	}

	this.addItemToBag = function(toAdd, addAmount){
		if(addAmount <= 0 || toAdd == null){
			//throw error here
		}

		this.totalWeight += toAdd.itemWeight * addAmount;

		var bagItem = {
			item: "toAdd",
			quantity: "addAmount",
			getItemQuantity: function(){
				return this.quantity;
			}
		};

		this.contents.push(bagItem);
	}

	// this.bagItem = function bagItem(item, amount){
	// 	this.item = item;
	// 	this.quantity = amount; 

	// 	this.getItemQuantity = function(){
	// 		return ""+this.quantity;
	// 	}
	// }
}