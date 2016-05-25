document.body.style.fontFamily = "sans-serif, verdana";


var myName = "Justin";
var myHometown = "Durham";
var myFavoriteMovie = "Pulp Fiction";
var myFavoriteFood = "Crab";


document.getElementById("fullname").innerHTML = myName;
document.getElementById("hometown").innerHTML = myHometown;
document.getElementById("movie").innerHTML = myFavoriteMovie;
document.getElementById("food").innerHTML = myFavoriteFood;

var list = document.querySelectorAll('li');

for (var a = 0; a<= list.length; a++){
  list[a].style.color = "red";
  list[a].className = "listItem";
}

// var img = document.createElement("img");
// img.setAttribute('src', ‘https://avatars0.githubusercontent.com/u/18503825?v=3&s=460');
// img.setAttribute('alt', 'about me');
// img.setAttribute('height', '50%');
// img.setAttribute('width', '50%');
// document.body.appendChild(img);
