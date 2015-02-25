var SelectDishView = function(container, model) {
	model.addObserver(this);

	var allDishes = container.find("#allDeezDishes");
	this.searchButton = container.find("#searchButton");
	this.searchBar = container.find("#searchBar");

	$.fn.testing = function(id) {
		model.addPending(id);
		console.log("Tryckte på: "+id);
		$("#selectDishView").hide();
		$("#rightPanel").hide();
		$("#dishDetailView").show();
		$("#dishIngredientView").show();
	};

	this.update = function(){
		console.log("Uppdaterar selectDishView..");
		var returnstring = "";
		var searchResults = model.returnSearchResults();
		var numberOfDishes = searchResults.length;
		returnstring += "<div class='row offset' id='topDishRow'>";
		for(var i = 0;i<numberOfDishes; i++){
			returnstring += "<div class='col-md-3 clickable'>";
			returnstring += "<div id='dishImage' onclick='$(this).testing("+searchResults[i].RecipeID+")'>";
			returnstring += "<img src='"+searchResults[i].ImageURL120+"' class='img-thumbnail'>";
			returnstring += "</div>";
			returnstring += "<div style='font-weight:bold'>"+searchResults[i].Title+"</div>";
			returnstring += searchResults[i].Category;
			returnstring += "</div>";
		}
		returnstring += "</div>";
		allDishes.html(returnstring);
	}
};