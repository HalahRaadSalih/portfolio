var app = angular.module('hellaHalah');

app.factory('projects', function(){
  return [
    {
      name:"Spark.TC Community",
      img:"client/assets/sparktc.png",
      link:"http://community.spark.tc",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      name:"CodeQuest",
      img:"client/assets/codequest.png",
      link:"http://codequest.io",
      description:"codequest.io is the database for discovering the questions that are being asked at interviews."
    },
    {
      name: "Take a Hike",
      img:"client/assets/take_a_hike.png",
      link:"https://github.com/walzerm/hikeWeatherApp",
      description:"A CRUD app, made by Lissa Walzer and Halah Al Shaikhly that gives users recommendations for local hikes in WA based on current weather conditions."
    },
    {
      name:"Learn To Code San Francisco",
      img:"client/assets/teaching.jpg",
      link:"http://www.meetup.com/learn-to-code-san-francisco/",
      description:"Giving Javascript lecture and assisting other teachers with their classes."
    }
  ];
});
