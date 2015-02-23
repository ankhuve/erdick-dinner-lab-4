var DishDetailViewController = function(view, model) {
	view.backButton.click(function(){
		model.removePending();
	});	
}