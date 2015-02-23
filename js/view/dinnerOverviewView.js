var DinnerOverviewView = function (container, model) {
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	model.addObserver(this);

	

	this.imageRow = container.find("#imageRow");
	this.nameRow = container.find("#nameRow");
	this.priceRow = container.find("#priceRow");

	this.update = function(arg){
		this.generateOverview();
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.generateOverview = function(){
		var fullMenu = model.getFullMenu();

		var imageRowString = "";
		var nameRowString = "";
		var priceRowString = "";

		for(dish in fullMenu){
			imageRowString += "<div class='col-md-2 col-md-offset-1'>";
			imageRowString += "<img src='images/"+fullMenu[dish].image+"'>";
			imageRowString += "</div>";

			nameRowString += "<div class='col-md-2 col-md-offset-1'>";
			nameRowString += fullMenu[dish].name;
			nameRowString += "</div>";

			priceRowString += "<div class='col-md-2 col-md-offset-1'>";
			priceRowString += model.getPriceOfDish(fullMenu[dish]) + " SEK";
			priceRowString += "</div>";
		}

		nameRowString += "<div class='col-md-2 col-md-offset-1'> Total </div>";
		priceRowString += "<div class='col-md-2 col-md-offset-1'>"+model.getTotalMenuPrice() + " SEK";
		
		this.imageRow.html(imageRowString);
		this.nameRow.html(nameRowString);
		this.priceRow.html(priceRowString);
	}

	this.generateOverview();
	
}