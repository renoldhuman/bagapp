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

	this.checkBagLocation = function(name){
		//console.log(name);
		//console.log(this.contents.length);
		for(i=0;i<this.contents.length;i++){
		//	console.log(this.contents[i].itemName);
			if(this.contents[i].itemName===name){
				return i;
			}
		}
		return -1;
	}

	this.increaseItemQuantity = function(i,amount){
		//console.log(this.contents[i].quantity);
		var newAmount = Number.parseInt(this.contents[i].itemQuantity) + Number.parseInt(amount);
		this.contents[i].itemQuantity = newAmount;
		//console.log(this.contents[i].quantity);
		this.totalWeight += this.contents[i].itemWeight * amount;
	}

	this.decreaseItemQuantity = function(i,amount){
		this.contents[i].quantity -= amount;
		this.totalWeight -= this.contents[i].itemWeight * amount;
	}

	this.addItemToBag = function(toAdd){
		// if(addAmount <= 0 || toAdd == null){
		// 	//throw error here

		// }
		// var location = this.checkBagLocation(toAdd.itemName);
		
		// if(location>0){
		// 	this.contents[location].increaseItemQuantity(addAmount);
		// }

		// else{
		// 	var bagItem = {
		// 		item: "toAdd",
		// 		quantity: "addAmount",
		// 		getItemQuantity: function(){
		// 			return this.quantity;
		// 		},
		// 		decreaseItemQuantity: function(amount){
		// 			this.quantity-=amount;
		// 		},
		// 		increaseItemQuantity: function(amount){
		// 			this.quantity+=amount;
		// 		}
		// 	};
		// this.contents.push(bagItem);
		// }
		this.contents.push(toAdd);
		this.totalWeight += toAdd.itemWeight * toAdd.itemQuantity;
		return this.contents.length-1;
		//return location;
	}

	// this.bagItem = function bagItem(item, amount){
	// 	this.item = item;
	// 	this.quantity = amount; 

	// 	this.getItemQuantity = function(){
	// 		return ""+this.quantity;
	// 	}
	// }
}