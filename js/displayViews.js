$("#backToEdit").click(function(){
    $("#dinnerOverviewView").hide();
});

$("#toNewDinner").click(function(){
    $("#divOfStartscreenness").hide();
    $("#exampleView").show();
    $("#rightPanel").show();
    $("#selectDish").show();
    $(".mainHeader").show();
    $("#selectDishView").show();
});

$("#confirmDinner").click(function(){
    $("#exampleView").hide();
    $("#selectDish").hide();
    $("#rightPanel").hide();
    $("#dishDetailView").hide();
    $("#dishIngredientView").hide();
    $("#selectDishView").hide();
    $("#dinnerOverviewView").show();

});

$(".backToEdit").click(function(){
	$("#dinnerOverviewView").hide();
    $("#dinnerPreparationView").hide();
    $("#dishDetailView").hide();
    $("#dishIngredientView").hide();
    $("#selectDish").show();
    $("#exampleView").show();
    $("#selectDishView").show();
    $("#rightPanel").show();
});

$("#printRecipe").click(function(){
    $("#dinnerOverviewView").hide();
    $("#dinnerPreparationView").show();

});

$("h1").click(function(){
	$("#dinnerOverviewView").hide();
    $("#dinnerPreparationView").hide();
    $("#exampleView").hide();
    $("#selectDish").hide();
    $(".mainHeader").hide();
    $("#divOfStartscreenness").show();
});

// $("dishImage").click(function(){
//     $("#selectDishView").hide();
//     $("#rightPanel").hide();
//     $("#dishDetailView").show();
//     $("#dishIngredientView").show();
// });