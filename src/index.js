import $ from "jquery";

function showError(e) {
  console.warn("Error", e);
}

function updateUI(info) {
  $("#app").text(JSON.stringify(info));
}

function getLocationURL([city, state]) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&APPID=7c748e66ec4489f390a888a83eb4a0f4`;
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: `https://api.github.com/users/${id}`,
      success: resolve,
      error: reject
    });
  });
}

function getWeather(user) {
  return new Promise((resolve, reject) => {
    $.getJSON({
      url: getLocationURL(user.location.split(",")),
      success: weather => resolve({ user, weather: weather.city }),
      error: reject
    });
  });
}

$("#btn").on("click", () => {
  getUser("tylermcginnis")
    .then(getWeather)
    .then(data => {
      updateUI(data);
    })
    .catch(showError);
});
