var ideaInputEl = $("#mySearchField1");
var ideaInputE2 = $("#mySearchField2");
var tattooContainerEl = $("#tattoos-container");
var searchFlickr = $("searchFlickr");
var searchPinterest = $("#SearchPinterest");
//var tattooSearchTerm = document.querySelector("#tattoo-search-term");
var searchButton = $("#searchFlickr");
//t_url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "t.jpg";
$(document).ready(function () {
  searchButton.on("click", function () {
    var searchTerm = ideaInputEl.val();
    console.log(searchTerm);
    getUserTattoos(searchTerm);
  });
});
function photoURL(data) {
  $("#tattoo1").html("");
  $("#tattoo2").html("");
  $("#tattoo3").html("");
  for (var i = 0; i < 6; i++) {
    var photos = data.photos.photo;
    var photo = photos[i];

    var myURL =
      "http://farm" +
      photo.farm +
      ".static.flickr.com/" +
      photo.server +
      "/" +
      photo.id +
      "_" +
      photo.secret +
      "_" +
      "t.jpg";

    if (i < 2) {
      var imgTag = $("<img />");
      imgTag.attr({ src: myURL }).width(405).height(300);
      $("#tattoo1").append(imgTag);
    } else if (i > 1 && i < 4) {
      var imgTag = $("<img />");
      imgTag.attr({ src: myURL }).width(405).height(300);
      $("#tattoo2").append(imgTag);
    } else {
      var imgTag = $("<img />");
      imgTag.attr({ src: myURL }).width(405).height(300);
      $("#tattoo3").append(imgTag);
    }
  }
}
var getUserTattoos = function (searchTerm) {
  // format the Flickr api url
  var apiUrl =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a035d2026d37e843cf4a59c8fdc80b9d&tags=" +
    searchTerm +
    "&per_page=&format=json&nojsoncallback=1";

  // make a get request to url
  fetch(apiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        photoURL(data);
      });
    }
  });
};
