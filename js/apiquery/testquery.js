function getRecipeJson() {
var apiKey = "dvxf6h66dHv0y2ifdEB9b9783szhaO7q";
var titleKeyword = "lasagna";
var url = "http://api.bigoven.com/recipes?pg=1&rpp=10&title_kw="+titleKeyword+ "&api_key="+apiKey;
$.ajax({
         type: "GET",
         dataType: 'json',
         cache: false,
         url: url,
         success: function (data) {
            // alert('success');
            var returnedData = document.createElement("p");
            returnedData.innerHTML = "Antal resultat: "+data.ResultCount+"</br>";
            returnedData.innerHTML += data.RecipeID+"</br>";
            returnedData.innerHTML += data.Description+"</br>";
            $("#test").append(returnedData)
            console.log(data);
            }
         });
       }