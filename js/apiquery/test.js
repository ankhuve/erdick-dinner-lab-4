var jqxhr = $.ajax({ url: "example.php" })
    .success(function() { alert("success"); })
    .error(function() { alert("error"); })
    .complete(function() { alert("complete"); });

// perform other work here ...

// Set another completion function for the request above
jqxhr.complete(function(){ alert("second complete"); });