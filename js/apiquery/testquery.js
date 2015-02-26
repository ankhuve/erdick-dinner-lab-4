var query = function(model){
   var apiKey = "dvxf6h66dHv0y2ifdEB9b9783szhaO7q";
   var titleKeyword = "lasagna";
   var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="+titleKeyword+"&api_key="+apiKey;
   $.ajax({
      type: "GET",
      dataType: 'json',
      cache: false,
      url: url,
      success: function (data) {

         alert('success');
         console.log(data);
         ;
      }
   });
};