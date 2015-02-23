var SelectDishView = function(container, model) {
	var selectedDishType = "starter";

	this.allDishes = container.find("#allDeezDishes");
	this.dropdownAppetizer = container.find("#dropdownAppetizer");
	this.dropdownMainCourse = container.find("#dropdownMainCourse");
	this.dropdownDessert = container.find("#dropdownDessert");
	this.selectedDishType = container.find("#selectedDishType");
	this.searchButton = container.find("#searchButton");
	this.searchBar = container.find("#searchBar");

	// model.addObserver(this);

	$.fn.testing = function(id) {
		model.addPending(id);
		$("#selectDishView").hide();
		$("#rightPanel").hide();
		$("#dishDetailView").show();
		$("#dishIngredientView").show();
	};

	var generateSelected = function(selectedDishes){
		var returnstring = "";
		var numberOfDishes = selectedDishes.length;

		returnstring += "<div class='row offset' id='topDishRow'>";
		for(var i = 0;i<numberOfDishes; i++){
			returnstring += "<div class='col-md-3 clickable'>";
			returnstring += "<div id='dishImage' onclick='$(this).testing("+selectedDishes[i].id+")'>";
			returnstring += "<img src='images/"+selectedDishes[i].image+"' class='img-thumbnail'>";
			returnstring += "</div>";
			returnstring += "<div style='font-weight:bold'>"+selectedDishes[i].name+"</div>";
			returnstring += selectedDishes[i].description;
			returnstring += "</div>";
		}
		returnstring += "</div>";
		return returnstring;
	}

	var generateAllDishes = function(dishType){
		var allSelected = model.getAllDishes(dishType);
		var generated = generateSelected(allSelected);
		// var generated = this.generateSelected(allSelected);

		return generated;
	};

	this.updateDishView = function(dishType){
		this.allDishes.html(generateAllDishes(dishType));
	};

	this.updateDishTypeSelected = function(dishType){
		this.selectedDishType.html(dishType);
	}

	this.setSelected = function(category){
		selectedDishType = category;
	}

	this.searchDishes = function(type, filter){
		var keywords = document.getElementById("searchBar").value;
		var resultDishes = model.getAllDishes(selectedDishType, keywords);
		var generated = generateSelected(resultDishes);

		this.allDishes.html(generated);
	}

	this.updateDishTypeSelected("Appetizer");
	this.updateDishView(selectedDishType);

};