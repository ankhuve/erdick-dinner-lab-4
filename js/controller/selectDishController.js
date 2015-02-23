var SelectDishController = function(view, model ) {
	view.dropdownAppetizer.click(function(){
		view.updateDishView('starter');
		view.updateDishTypeSelected('Appetizer');
		view.setSelected('starter');
	});
	
	view.dropdownMainCourse.click(function(){
		view.updateDishView('main dish');
		view.updateDishTypeSelected('Main Course');
		view.setSelected('main dish');
	});
	
	view.dropdownDessert.click(function(){
		view.updateDishView('dessert');
		view.updateDishTypeSelected('Dessert');
		view.setSelected('dessert');
	});

	view.searchButton.click(function(){
		view.searchDishes();
	})

	// Make search when enter is pressed
    $('#searchBar').keypress(function(e) {
        if(e.which == 10 || e.which == 13) {
            view.searchDishes();
        }
    });	

}