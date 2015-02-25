var SelectDishController = function(view, model) {

	view.searchButton.click(function(){
		var titleKeyword = document.getElementById("searchBar").value;
		titleKeyword.replace(/\s+/g, '-').toLowerCase();
		model.keywordSearch(titleKeyword);
	})

	// Make search when enter is pressed
    $('#searchBar').keypress(function(e) {
        if(e.which == 10 || e.which == 13) {
        	var titleKeyword = document.getElementById("searchBar").value;
        	titleKeyword.replace(/\s+/g, '-').toLowerCase();
            model.keywordSearch(titleKeyword);
        }
    });	

}