var SelectDishView = function(container, model) {
	model.addObserver(this);

	var allDishes = container.find("#allDeezDishes");
	this.searchButton = container.find("#searchButton");
	this.searchBar = container.find("#searchBar");

	$.fn.testing = function(id) {
		model.addPending(id);
		$("#selectDishView").hide();
		$("#rightPanel").hide();
		$("#dishDetailView").show();
		$("#dishIngredientView").show();
	};

	this.update = function(){};


	var updateResults = function(results){
		allDishes.html(results);
	};

	this.getRecipeJson = function() {
		var apiKey = "dvxf6h66dHv0y2ifdEB9b9783szhaO7q";
		var titleKeyword = document.getElementById("searchBar").value;
		titleKeyword.replace(/\s+/g, '-').toLowerCase();
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="+titleKeyword+ "&api_key="+apiKey;
		$.ajax({
			type: "GET",
			dataType: 'json',
			cache: false,
			url: url,
			success: function (data) {
				var returnstring = "";
				var numberOfDishes = data.Results.length;
				returnstring += "<div class='row offset' id='topDishRow'>";
				for(var i = 0;i<numberOfDishes; i++){
					returnstring += "<div class='col-md-3 clickable'>";
					returnstring += "<div id='dishImage' onclick='$(this).testing("+data.Results[i].RecipeID+")'>";
					returnstring += "<img src='"+data.Results[i].ImageURL120+"' class='img-thumbnail'>";
					returnstring += "</div>";
					returnstring += "<div style='font-weight:bold'>"+data.Results[i].Title+"</div>";
					returnstring += data.Results[i].Category;
					returnstring += "</div>";
				}
				returnstring += "</div>";
				updateResults(returnstring);
			}
			
		});
	}
};