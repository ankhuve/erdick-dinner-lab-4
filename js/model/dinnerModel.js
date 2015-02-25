//DinnerModel Object constructor
var DinnerModel = function() {
	var apiKey = "dvxf6h66dHv0y2ifdEB9b9783szhaO7q";
	var pending = "none";
	var guests = 4;
	var menu = [];
	var observers = [];	
	var searchResults = [];

	this.returnSearchResults = function(){
		return searchResults;
	}
 
	this.addObserver = function(observer) {
		observers.push(observer);
	}

	this.keywordSearch = function(keyword){
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="+keyword+ "&api_key="+apiKey;
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			url: url,
			success: function (data) {
				searchResults = data.Results;
				console.log(data.Results);
				notifyObservers();
			}
		});
	}

	this.recipeSearch = function(recipeID){
		var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			url: url,
			success: function (data) {
				pending = data.Results;
				console.log("Hittade recept: "+data.Results);
				notifyObservers();
			}
		});
	}

	this.addPending = function(id){
		pending = id;
		notifyObservers();
	}

	//Returns ID of pending dish
	this.getPending = function(){
		// console.log(pending);
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
			observers[i].update(arg);
		}
	}

	this.setNumberOfGuests = function(num) {
		guests = num;
		notifyObservers();
	}

	this.getNumberOfGuests = function() {
		return guests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		var selectedDish = [];
		for(dish in menu){
			if(menu[dish].type === type){
				selectedDish.push(menu[dish]);
			} 
		}
		return selectedDish[0];
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var fullMenu = [];
		for(dish in menu){
			fullMenu.push(menu[dish]);
		}
		return fullMenu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var allIngredients = [];
		for(dish in menu){
			for(ingredient in menu[dish].ingredients){
				allIngredients.push(menu[dish].ingredients[ingredient]);
			}
		}
		return allIngredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = 0;
		for(dish in menu){
			for(ingredient in menu[dish].ingredients){
				totalPrice += menu[dish].ingredients[ingredient].price;
			}
		}

		totalPrice *= guests;
		return totalPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var selectedDish = this.getDish(id);
		var duplicates = false;

		for(dish in menu){
			if(menu[dish].type === selectedDish.type){
				menu.splice(dish,1,selectedDish);
				duplicates = true;
			}
		}
		if(!duplicates){
			menu.push(selectedDish);
		}

		notifyObservers();
		return menu;
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for(dish in menu){
			if(menu[dish].id === id){
				menu.splice(dish, 1);
			}
		}
		notifyObservers();
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {

	 //  return $(dishes).filter(function(index,dish) {
		// var found = true;
		// if(filter){
		// 	found = false;
		// 	$.each(dish.ingredients,function(index,ingredient) {
		// 		if(ingredient.name.indexOf(filter)!=-1) {
		// 			found = true;
		// 		}
		// 	});
		// 	if(dish.name.indexOf(filter) != -1)
		// 	{
		// 		found = true;
		// 	}
		// }
	 //  	return dish.type == type && found;
	 //  });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		console.log("Försöker hämta recipe ID: "+id);
		for(key in searchResults){
			if(searchResults[key].RecipeID == id) {
				return searchResults[key];
			}
		}
	}

	this.getPriceOfDish = function(dish){
		var priceOfDish = 0;
		for(ingredient in dish.ingredients){
			priceOfDish += dish.ingredients[ingredient].price;
		}
		
		priceOfDish *= guests;
		return priceOfDish;
	}

};