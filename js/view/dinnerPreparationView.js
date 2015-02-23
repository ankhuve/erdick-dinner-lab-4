var DinnerPreparationView = function (container, model) {
	this.numberOfGuests = container.find("#numberOfGuests");
	this.preparations = container.find("#preparations");
	this.numberOfGuests.html(model.getNumberOfGuests());

	model.addObserver(this);

	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.preparations.html(this.getPreparations());
	}

	this.getPreparations = function(){
		var fullMenu = model.getFullMenu();
		var returnstring = "";
		for(dish in fullMenu){
			returnstring += "<div class='row' id='dishDetailsRow'>";
			returnstring += "<div class='col-md-2'><img src='images/"+fullMenu[dish].image+"'></div>";

			returnstring += "<div class='col-md-4'>";
			returnstring += "<h3 class='dishName'><strong><p class='text-uppercase'>"+fullMenu[dish].name+"</p></strong></h3>";
			for(ingredient in fullMenu[dish].ingredients){
				returnstring += fullMenu[dish].ingredients[ingredient].name + "<br/>";
			}
			returnstring += "</div>";

			returnstring += "<div class='col-md-5'>";
			returnstring += "<h4><strong> Preparation </strong></h4>";
			returnstring += fullMenu[dish].description;
			returnstring += "</div>";

			returnstring += "</div>";

		}
		return returnstring;
	}

	this.preparations.html(this.getPreparations());

}