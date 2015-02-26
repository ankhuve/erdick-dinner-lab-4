var SelectDishView = function(container, model) {

	this.allDishes = container.find("#allDeezDishes");
	this.selectedDishType = container.find("#selectedDishType");
	this.searchButton = container.find("#searchButton");
	this.searchBar = container.find("#searchBar");

	model.addObserver(this);

	$.fn.addPending = function(id) {
		model.addPending(id);
		$("#selectDishView").hide();
		$("#rightPanel").hide();
		$("#dishDetailView").show();
		$("#dishIngredientView").show();
	};
	
	this.update = function(){
		var dishes = model.getAllDishes();
		var returnstring = "";
		returnstring += "<div id='topDishRow'>";
		for(var i = 0; i<dishes.length;i++){
			returnstring += "<div class='col-md-3 clickable'>";
			returnstring += "<div id='dishImage' onclick='$(this).addPending("+dishes[i].RecipeID+")'>";
			returnstring += "<img src='"+dishes[i].ImageURL120+"' class='img-thumbnail'>";
			returnstring += "</div>";
			returnstring += "<div style='font-weight:bold'>"+dishes[i].Title+"</div>";
			returnstring += "</div>";
			returnstring += "</div>";
		}
		returnstring += "</div>";
		this.allDishes.html(returnstring);
	}

	var generateAllDishes = function(){
		model.generateDishes();
	};
	
	generateAllDishes();

};