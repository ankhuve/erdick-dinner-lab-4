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
		var pendingDish = model.getDish(pendingID);
		if(pendingID === "none"){
			this.dishName.html("No pending dishes");
		} else {
			console.log("Hämtade rätt: "+pendingDish.Title);
			this.dishName.html(pendingDish.Title);
			this.dishPic.html("<img src='"+pendingDish.ImageURL+"' width='350px' class='img-thumbnail'>");
			this.dishDescription.html(model.recipeSearch(pendingID));
		};

	};
	
	this.update = function(arg){
		console.log("Uppdaterar dishDetailView..");
		var dishID = model.getPending();
		console.log("Pending dish är: "+dishID);
		this.getDetailView(dishID);
	};

	this.getDetailView();
}