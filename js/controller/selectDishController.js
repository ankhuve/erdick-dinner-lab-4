var SelectDishController = function(view, model ) {
	view.searchButton.click(function(){
		view.getRecipeJson();
	})

	// Make search when enter is pressed
    $('#searchBar').keypress(function(e) {
        if(e.which == 10 || e.which == 13) {
            view.getRecipeJson();
        }
    });	

}