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
		for(i=0;i<this.contents.length;i++){
			if(this.contents[i].itemName===name){
				return i;
			}
		}
		return -1;
	}

	this.increaseItemQuantity = function(i,pAmount){
		var amount = Number.parseInt(pAmount);
		if(this.checkBagWeight(this.contents[i].itemWeight * amount) != -1){
			//Throw error here
			return;
		}
		var newAmount = Number.parseInt(this.contents[i].itemQuantity) + amount;
		this.contents[i].itemQuantity = newAmount;
		this.totalWeight += this.contents[i].itemWeight * amount;
	}

	this.decreaseItemQuantity = function(i,amount){
		var newAmount = Number.parseInt(this.contents[i].itemQuantity) - Number.parseInt(amount);
		this.contents[i].itemQuantity = newAmount;
		this.totalWeight -= this.contents[i].itemWeight * amount;
	}

	this.addItemToBag = function(toAdd){
		if(this.checkBagWeight(toAdd.itemWeight * toAdd.itemQuantity) != -1){
			//Throw error here
			console.log("Exited function due to Bag Weight");
			return FALSE;
		}

		this.contents.push(toAdd);
		this.totalWeight += toAdd.itemWeight * toAdd.itemQuantity;
		return this.contents.length-1;
	}

	this.checkBagWeight = function(amount){
			var newVal = this.totalWeight + Number.parseInt(amount);

			if(newVal > this.maxWeight){
				//Throw error here (popup)
				alert("Cannot add item: Bag is too heavy");
				return 0;
			}

		return -1;
	}

}
