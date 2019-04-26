$(document).ready(function() {
	setTimeout(function() {
		$("#preloader").css("display","none")
	}, 5000);
});
function hoverHash(imdb) {
	$.get("https://www.omdbapi.com/?i="+imdb+"&plot=full&r=json&apikey=bd31da15", function (data) {
		movie_rating = Math.round(data.imdbRating);
		movie_rating_star = '<i class="fas fa-star"></i>';
		movie_rating_star_empty = '<i class="far fa-star"></i>';
		html_rating = movie_rating_star.repeat(movie_rating)+movie_rating_star_empty.repeat(10 - movie_rating);
		$("#movie-rating-star-"+imdb).html(html_rating);
	});	
	$("#movie-rating-star-"+imdb).css("visibility", "visible");
}	
function outHash(imdb) {
	$("#movie-rating-star-"+imdb).css("visibility", "hidden");
}
function catalogue(hash, imdb, magnet, title, rating, poster, genre, background, api_url, provider, proxy, content_value) {
	var html = "";
	html+='<div id="movie-box-'+'" class="movie-box movie-box-'+genre+' col-lg-2 col-md-3 col-sm-6 col-xs-12" style="position:relative;float:left;">';
	html+='<div style="width: 100%; height: 330px; position: absolute;left: 0px; top: 0px; -webkit-filter: blur(3px); -moz-filter: blur(3px); -o-filter: blur(3px); -ms-filter: blur(3px); filter: blur(3px); background-image:url('+background+'); background-position: center; background-size: cover;  background-repeat: no-repeat; -webkit-box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1); -moz-box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1); box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 1);"></div>';
	// html+='<a href="'+magnet+'" target="_blank">';
	html+='<img id="img-movie-box-'+hash+'" class="hover-luz" title="'+title+'" alt="'+title+'" src="'+poster+'" onclick="openNewWindow(1080, 720, &#39;'+magnet+'&#39;)" onmouseover="hoverHash(&#39;'+imdb+'&#39;)" onmouseout="outHash(&#39;'+imdb+'&#39;)"/>';
	html+='<div id="movie-rating-star-'+imdb+'" class="movie_rating_star"></div></div>';
	// html+='</a>';
	$('#movies').append(html);
}
function openNewWindow(width, height, hash) {
    var top = (screen.availHeight / 2) - (height / 2);
	var left = (screen.availWidth / 2) - (width / 2);
	var features = "location=1, status=1, scrollbars=1, width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;
	let customWindow = window.open(hash, "kad", features);
	customWindow.onload = function() {
		let html = `<div style="font-size:30px">Welcome!</div>`;
		newWindow.document.body.innerHtml(html);
	};	
}
