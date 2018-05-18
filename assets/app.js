var authKey = '10dd49c028ae47bab105dff84789127c';


function makeQuery()
{
  var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json" ;

   var searchTerm = $("#search-term").val().trim();
   var recordNum = $("#search-records").val().trim();
   var yearStart = $("#start-year").val().trim();
   var yearEnd = $("#end-year").val().trim();

   queryURLBase += '?' + $.param({
    'api-key': authKey,
    'q': searchTerm,
    'begin_date': yearStart+"0101",
    'end_date': yearEnd+"0101"
  });

  $.ajax({
    url: queryURLBase ,
    method: "GET"
  }).then(function(event)  
  {
    console.log(event);
    var articles = event.response.docs;
    $("#article-row").empty();
    for(var ii=0;ii<recordNum;ii++)
    {
        var articleLink= articles[ii].web_url;
        var header=articles[ii].snippet;
        var headLine = $("<a>");
        headLine.attr("href",articleLink);
        headLine.text(header);
        $("#article-row").append(headLine);
    }
  });

};


$("#run-search").on("click", function(event) {
    event.preventDefault();
    makeQuery();

})
