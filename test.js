// function weatherReceived(data) {
//   let weather = data;
//   console.log(weather);
// }

// function getWeather(callback) {
//   setTimeout(() => {
//     callback('Sunny')
//   })

// }

// getWeather(weatherReceived);

//Let's use Promises now

function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Sunny');
    })

  })
}