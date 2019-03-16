
$(document).ready(function(){ 
    var text = "If you're not making mistakes, then you're not making decisions.";
    
    $("#new-quote").click(function() {      
          $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(responseText) { 
            
            $("#text").html("\"" + responseText.quoteText + "\"");
            $("#author").html("- " + responseText.quoteAuthor);
            
            text = responseText.quoteText;
        });
    });
    
    $("#tweet-quote").click(function() {
        window.open("https://www.twitter.com/intent/tweet?text=" + text);
    });   
});   

