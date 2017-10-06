function Bag(maxWeight){

	 this.contents = [];
	 this.totalWeight = 0;
	 this.maxWeight = maxWeight;
	 this.itemCount = 0;

	this.getItemCount = function(){
		return this.itemCount;
	}

	this.getContents = function (i){
		if(arguments.length==0){
			return this.contents;
		}
		else return this.contents[i];
	}

	this.getTotalWeight= function(){
		return this.totalWeight;
	}

	this.getItemIDByName = function(name){
		for(i=0;i<this.contents.length;i++){
			if(this.contents[i].itemName===name){
				return ""+this.contents[i].itemID;
			}
		}
		return -1;
	}

	this.getBagLocationByID = function(id){
		//console.log(""+id);
		var ID = Number.parseInt(id);
		console.log("Current Item Id "+ID);
		console.log("Bag Length "+this.contents.length);
		//console.log("Actual Item Id in Bag "+this.contents[1].itemID);
		for(i=0;i<this.contents.length;i++){
			if(this.contents[i].itemID==ID){
				return i;
			}
		}
		return -1;
	}

	this.increaseItemQuantity = function(id,pAmount){
		var amount = Number.parseInt(pAmount);
		var ID = Number.parseInt(id);
		var i = this.getBagLocationByID(ID);
		if(this.checkBagWeight(this.contents[i].itemWeight * amount) != -1){
			//Throw error here
			return;
		}
		var newAmount = Number.parseInt(this.contents[i].itemQuantity) + amount;
		this.contents[i].itemQuantity = newAmount;
		this.totalWeight += this.contents[i].itemWeight * amount;
	}

	this.decreaseItemQuantity = function(id,damount){
		//console.log(""+id);
		var amount = Number.parseInt(damount);
		var ID = Number.parseInt(id);
		var i = this.getBagLocationByID(ID);
		console.log(""+i);
		var newAmount = Number.parseInt(this.contents[i].itemQuantity) - Number.parseInt(amount);
		if(newAmount <= 0){
			this.totalWeight -= this.contents[i].itemWeight * this.contents[i].itemQuantity;
			 return this.removeItemFromBag(i);
		}
		this.contents[i].itemQuantity = newAmount;
		this.totalWeight -= this.contents[i].itemWeight * amount;
		return 0;
	}
//Something is going wrong here
	this.removeItemFromBag = function(i){
		this.contents[i]=null;
		for(var j=i;j<this.contents.length;j++){
			if(j<this.contents.length-1){
				this.contents[j]=this.contents[j+1];
				//console.log(""+this.contents[j].itemName)
			}
			else this.contents.pop();
		}
		this.itemCount--;
		return 1;
	}

	this.addItemToBag = function(toAdd){
		if(this.checkBagWeight(toAdd.itemWeight * toAdd.itemQuantity) != -1){
			//Throw error here
			console.log("Exited function due to Bag Weight");
			return FALSE;
		}

		this.contents.push(toAdd);
		this.totalWeight += toAdd.itemWeight * toAdd.itemQuantity;
		this.itemCount++;
		return ""+toAdd.itemID;
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
