var SelectDishController = function(view, model ) {
	view.searchButton.click(function(){
		var keyword = document.getElementById("searchBar").value;
		model.searchDishes(keyword);
	})

	// Make search when enter is pressed
    $('#searchBar').keypress(function(e) {
        if(e.which == 10 || e.which == 13) {
    		var keyword = document.getElementById("searchBar").value;
			model.searchDishes(keyword);
        }
    });	

}