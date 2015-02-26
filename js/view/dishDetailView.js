 //DishDetailView Object constructor
var DishDetailView = function (container, model) {

 	this.dishName = container.find("#nameOfDish");
 	this.dishPic = container.find("#dishImg");
 	this.dishDescription = container.find("#dishDesc");
 	this.backButton = container.find("#backButton");
 	
 	model.addObserver(this);

	this.getDetailView = function(){
		var pendingDish = model.getPending();
		if(pendingDish === "none"){
			this.dishName.html("No pending dishes");
		} else {
			this.dishName.html(pendingDish.Title);
			this.dishPic.html("<img src='"+pendingDish.ImageURL+"' width='350px' class='img-thumbnail'>");
			this.dishDescription.html(pendingDish.Instructions);
		};

	};
	
	this.update = function(arg){
		this.getDetailView();
	};
}