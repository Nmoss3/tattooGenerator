var ideaInputEl = $("#mySearchField1");
var ideaInputE2 = $("#mySearchField2");
var tattooContainerEl = $("#tattoos-container");
//var tattooSearchTerm = document.querySelector("#tattoo-search-term");
var searchButton = $("#searchFlickr");
$(document).ready(function () {
  searchButton.on("click", function () {
    var searchTerm = ideaInputEl.val();
    console.log(searchTerm);
    getUserTattoos(searchTerm);
  });
});

var getUserTattoos = function (user) {
  // format the Flickr api url
  var apiUrl =
    "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=36cfa3d828dec55a60e1961894c998ed&per_page=10&format=json&nojsoncallback=1";

  // make a get request to url
  fetch(apiUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayTattoos(data, user);
        });
      }
    })
    .catch(function (error) {});
};

var getFeaturedTattoos = function (language) {
  // format the Pinterest api url
  var apiUrl = "https://api.pinterest.com/search/tattoos?q=";

  // make a get request to url
  fetch(apiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        displayTattoos(data.items, language);
      });
    }
  });
};

var searchButton = $("#searchFlickr");
$(document).ready(function () {
  searchButton.on("click", function () {
    var searchTerm = ideaInputE2.val();
    console.log(searchTerm);
    getUserTattoos(searchTerm);
  });
});

var displayTattoos = function (tattoos, searchTerm) {
  // check if api returned any images
  if (tattoos.length === 0) {
    tattooContainerEl.textContent = "";
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  // loop over images
  for (var i = 0; i < repos.length; i++) {
    // format image name
    var repoName = tattoos[i].owner.login + "/" + tattoos[i].name;

    // create a link for each tattoo pic
    var tattooEl = document.createElement("a");
    tattooEl.classList =
      "list-item flex-row justify-space-between align-center";
    tattooEl.setAttribute("href", "./single-repo.html?repo=" + repoName);

    // create a span element to hold tattoo info
    var titleEl = document.createElement("span");
    titleEl.textContent = tattooName;

    // append to container
    tattooEl.appendChild(titleEl);

    // create a status element
    var statusEl = document.createElement("span");
    statusEl.classList = "flex-row align-center";

    // append to container
    tattooEl.appendChild(statusEl);

    // append container to the dom
    tattooContainerEl.appendChild(tattooEl);
  }
};

// add event listeners to form and button container
