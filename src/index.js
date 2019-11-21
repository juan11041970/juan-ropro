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
//Promise --> Manage asynchronous request. Pending, resolved, rejected
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

  // const weatherPromise = new Promise()
  //
  // weatherPromise.then((user) => {
  //   $.getJSON({
  //     url: getLocationURL(user.location.split(",")),
  //     success: weather => resolve({ user, weather: weather.city })
  //   });
  //   weatherPromise.catch(reject)
  // })

  return new Promise((resolve, reject) => {
    // $.getJSON({
    //   url: getLocationURL(user.location.split(",")),
    //   success(weather) {
    //       resolve({
    //         user,
    //         weather: weather
    //       })
    //     },
    //   error: reject
    // })

    $.getJSON({
      url: getLocationURL(user.location.split(",")),
      success: weather => resolve({user, weather: weather}),
      error: reject
    })
  })
}

$("#btn").on("click", () => {

  // const userPromise = getUser('tylermcginnis')
  //
  // userPromise.then((user) => {
  //   const weatherPromise = getWeather(user)
  //
  //   weatherPromise.then(
  //       weather => {
  //     updateUI({
  //       user,
  //       weather: weather.weather
  //     })
  //
  //     weatherPromise.catch(showError)
  //   })
  //   userPromise.catch(showError)
  // });
  getUser("tylermcginnis")
    .then(getWeather)
    .then(data => { updateUI(data)})
    .catch(showError);
});

//Need to figure out the babel stuff to make below code work
// $("#btn-async").on("click", async() => {
//
//   try {
//     const user = await getUser('tylermcginnis')
//     const weather = await getWeather(user)
//
//     updateUI({
//       user, weather
//     })
//   } catch(ex) {
//       showError(ex)
//   }
// });
