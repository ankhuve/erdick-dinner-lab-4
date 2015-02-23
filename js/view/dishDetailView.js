 //DishDetailView Object constructor
var DishDetailView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
 	this.dishName = container.find("#nameOfDish");
 	this.dishPic = container.find("#dishImg");
 	this.dishDescription = container.find("#dishDesc");
 	this.backButton = container.find("#backButton");
 	
 	model.addObserver(this);

	this.getDetailView = function(){
		var pendingID = model.getPending();

		if(pendingID === "none"){
			this.dishName.html("No pending dishes");
		} else {

			this.dishName.html(model.getDish(pendingID).name);
			this.dishPic.html("<img src='images/"+model.getDish(pendingID).image+"' width='350px' class='img-thumbnail'>");
			this.dishDescription.html(model.getDish(pendingID).description);
		};

	};
	
	this.update = function(arg){
		var dishID = model.getPending();
		this.getDetailView(dishID);
	};

	this.getDetailView();
}