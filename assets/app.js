var authKey = '10dd49c028ae47bab105dff84789127c';
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey;


function makeQuery()
{
   var searchTerm = $("#search-term").val().trim();
   var recordNum = $("#search-records").val().trim();
   var yearStart = $("#start-year").val().trim();
   var yearEnd = $("#end-year").val().trim();

   queryURLBase += "?" + $.param({ 'q': searchTerm,
    'begin_date': yearStart+"0101",
    'end_date': yearEnd+"01001"
  });
$.ajax({
    url: queryURLBase ,
    method: "GET"
  }).then(function(response)  
  {

    console.log(response);

  });

};


$("#run-search").on("click", function(event) {
    event.preventDefault();
    makeQuery();

})
