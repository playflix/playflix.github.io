function hoverHash(imdb) {
	$.get("http://www.omdbapi.com/?i="+imdb+"&plot=full&r=json&apikey=bd31da15", function (data) {
		movie_rating = Math.round(data.imdbRating);
		movie_rating_star = '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
		movie_rating_star_empty = '<span class="glyphicon glyphicon-star" aria-hidden="true" style="color:#000;"></span>';
		html_rating = movie_rating_star.repeat(movie_rating)+movie_rating_star_empty.repeat(10 - movie_rating);
		$("#movie-rating-star-"+imdb).html(html_rating);
	});	
	$("#movie-rating-star-"+imdb).css("visibility", "visible");
}	
function outHash(imdb) {
	$("#movie-rating-star-"+imdb).css("visibility", "hidden");
}
function catalogue (hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value) {
	var html = "";
	html+='<div id="movie-box-'+'" class="movie-box movie-box-'+genre+' col-lg-2 col-md-3 col-sm-6 col-xs-12" style="position:relative;float:left;">';
	html+='<div style="width: 100%; height: 330px; position: absolute;left: 0px; top: 0px; -webkit-filter: blur(3px); -moz-filter: blur(3px); -o-filter: blur(3px); -ms-filter: blur(3px); filter: blur(3px); background-image:url('+background+'); background-position: center; background-size: cover;  background-repeat: no-repeat; -webkit-box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1); -moz-box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1); box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1);"></div>';
	html+='<a href="'+magnet+'">';
	html+='<img id="img-movie-box-'+hash+'" class="hover-luz" title="'+title+'" alt="'+title+'" src="'+poster+'" onmouseover="hoverHash(&#39;'+imdb+'&#39;)" onmouseout="outHash(&#39;'+imdb+'&#39;)" onclick="f_play_detalle(&#39;'+hash+'&#39;,&#39;'+imdb+'&#39;,&#39;'+magnet+'&#39;,&#39;'+title+'&#39;,&#39;'+rating+'&#39;,&#39;'+poster+'&#39;,&#39;'+genre+'&#39;,&#39;'+background+'&#39;,&#39;'+api_url+'&#39;,&#39;'+provider+'&#39;,&#39;'+proxy+'&#39;,&#39;'+content_value+'&#39;); scrollDetails(&#39;'+hash+'&#39;);"/>';
	html+='<div id="movie-rating-star-'+imdb+'" class="movie_rating_star"></div></div>';
	html+='</a>';
	$('#movies').append(html);
}
function closeThis_detalle() {
    document.getElementById("images_detalle").innerHTML = "";
    $("#fullscreen_detail").attr('class','fullscreen_detail_out');
};
function scrollDetails(hash) {  
    $("html").css("overflow","hidden");
    $("#fullscreen_detail").css("overflow","scroll");
};  
function unscrollDetails() {    
    $("html").css("overflow","scroll");
    $("#fullscreen_detail").css("overflow","hidden");
};
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
