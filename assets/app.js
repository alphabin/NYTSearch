var authKey = '10dd49c028ae47bab105dff84789127c';
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";


function makeQuery()
{
   var searchTerm = $("").text();
   var recordNum = $("").text();
   var yearStart = $("").text();
   var yearEnd = $("").text();
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) 
  
  {



  });

};