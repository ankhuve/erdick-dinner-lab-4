 //dishIngredientView Object constructor
var DishIngredientView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
 	var dishID = model.getPending();
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.menuDetails = container.find("#menuDetails");
	this.dishPrice = container.find("#selectedDishPrice");

	model.addObserver(this);
	
	this.update = function(arg){
		this.menuDetails.html(getMenuDetails().ingredientDetails);
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.dishPrice.html(getMenuDetails().totalPrice);
	}

	var getMenuDetails = function(){
		var dishID = model.getPending();

		if(dishID!="none"){
			var selectedDish = model.getDish(dishID);
			var returnstring = "";
			var totalPrice = 0;
			for(ingredient in selectedDish.ingredients){
				returnstring += "<div class='row'>";
				returnstring += "<div class='col-md-3'>"+(selectedDish.ingredients[ingredient].quantity*model.getNumberOfGuests()).toFixed(1)+" "+selectedDish.ingredients[ingredient].unit+"</div>";
				returnstring += "<div class='col-md-6'>"+selectedDish.ingredients[ingredient].name+"</div>";
				returnstring += "<div class='col-md-1'> SEK </div>";
				returnstring += "<div class='col-md-1'>"+(selectedDish.ingredients[ingredient].price*model.getNumberOfGuests()).toFixed(2)+"</div>";
				returnstring += "</div>";
				totalPrice += selectedDish.ingredients[ingredient].price * model.getNumberOfGuests();
			}

			var dishDetails = {
				'ingredientDetails':returnstring,
				'totalPrice':totalPrice};
		} else {
			var dishDetails = {
				'ingredientDetails':"none",
				'totalPrice':0};
		}
		return dishDetails;
	}

	this.menuDetails.html(getMenuDetails().ingredientDetails);
	this.dishPrice.html(getMenuDetails().totalPrice);
	this.addButton = container.find("#addButton");
}