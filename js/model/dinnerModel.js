//DinnerModel Object constructor
var DinnerModel = function() {
	var pending = "none";
	var guests = 4;
	var menu = [];
	var observers = [];	
	var dishes = [];
 
	this.addObserver = function(observer) {
		observers.push(observer);
	}

	this.addPending = function(id){
		var apiKey = "dvxLl271adHi9kSJNj29sNWp256I35Y0";
		var url= "http://api.bigoven.com/recipe/"+id+"?api_key="+apiKey;
		$.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                pending = data;
                notifyObservers();
            } 
        });
	}

	this.getPending = function(){
		return pending;
	}

	this.removePending = function(){
		pending = "none";
		notifyObservers();
	}

	var notifyObservers = function(arg) 
	{
		for(var i=0; i<observers.length; i++) 
		{
			observers[i].update();
		}
	}

	this.setNumberOfGuests = function(num) {
		guests = num;
		notifyObservers();
	}

	this.getNumberOfGuests = function() {
		return guests;
	}

	this.getFullMenu = function() {
		return menu;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalMenuPrice = 0;
		for(dish in menu) {
			totalMenuPrice += this.getNumberOfGuests()*menu[dish].pricePerPerson;
		}
		return totalMenuPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(pending) {
		var duplicates = false;
		if(menu.length === 0){
			menu.push(pending);
		} else {
			for(dish in menu){
				if(menu[dish].RecipeID === pending.RecipeID){
					alert(menu[dish].Title +" is already in the menu!");
					duplicates = true;
					break;
				}
			}
			if(!duplicates){
				if(menu.length<3){
					menu.push(pending);
				} else {
					menu.splice(2,1,pending);
				}
			}
		}
		notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for(dish in menu){
			if(menu[dish].RecipeID === id){
				menu.splice(dish, 1);
			}
		}
		notifyObservers();
	}

	this.generateDishes = function(type, filter){
		var apiKey = "dvxLl271adHi9kSJNj29sNWp256I35Y0";
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&api_key="+apiKey;
		
		$.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                dishes = data.Results;
                notifyObservers();
            } 
        });
	}

	this.searchDishes = function(keyword){
		var apiKey = "dvxLl271adHi9kSJNj29sNWp256I35Y0";
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="+keyword+"&api_key="+apiKey;
		
		$.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                dishes = data.Results;
                notifyObservers();
            } 
        });
	}

	this.getPriceOfDish = function(dish){
		var priceOfDish = 0;
		for(ingredient in dish.Ingredients){
			priceOfDish += dish.Ingredients[ingredient].Quantity * guests;
		}
		return priceOfDish;
	}

	this.getAllDishes = function() {
		return dishes;
	}
}