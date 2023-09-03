console.log("welcome to my world");
// intialization the variable
let play = document.getElementById("play");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let musicGif = document.getElementById("musicGif");
let myProgressbar = document.getElementById("myProgressbar");
let audioElement = new Audio();
let masterSongName = document.getElementById("masterSongName");
var index = 0;
var count = 0;
let playSongImg = document.getElementById("playSongImg");
let songs = [
  {
    songName: "Dancin",
    filePath: "1.mp3",
    imagePath: "./images/1.jpg",
  },
  {
    songName: "One Dance",
    filePath: "2.mp3",
    imagePath: "./images/2.jpg",
  },
  {
    songName: "Shinunoga E-Wa",
    filePath: "3.mp3",
    imagePath: "./images/3.jpg",
  },
  {
    songName: "I Wanna Be Yours",
    filePath: "4.mp3",
    imagePath: "./images/4.jpg",
  },
  {
    songName: "Life Goes On",
    filePath: "5.mp3",
    imagePath: "./images/5.jpg",
  },
];
let songList = Array.from(document.getElementsByClassName("songList"));
// play pause ;
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      var index = parseInt(e.target.id);
    });
  }
);
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
const sign = () => {
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("fa-play-circle");
  document.getElementById(`${index}`).classList.add("fa-pause-circle");
};
play.addEventListener("click", () => {
  time = audioElement.currentTime;
  if (audioElement.paused || audioElement.currentTime <= 0) {
    sign();
    playSongImg.src = songs[index].imagePath;
    masterSongName.innerText = songs[index].songName;
    audioElement.src = `${index + 1}.mp3`;
    audioElement.play();
    audioElement.currentTime = time;
    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");
    musicGif.style.opacity = 1;
  } else {
    audioElement.pause();
    play.classList.remove("fa-pause-circle");
    play.classList.add("fa-play-circle");
    musicGif.style.opacity = 0;
  }
});
//myProgressbar
audioElement.addEventListener("timeupdate", () => {
  let progress = (audioElement.currentTime * 100) / audioElement.duration;
  myProgressbar.value = progress;
});
myProgressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});
songList.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].imagePath;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      index = parseInt(e.target.id);
      audioElement.src = `${index + 1}.mp3`;
      audioElement.play();
      audioElement.currentTime = 0;
      playSongImg.src = songs[index].imagePath;
      masterSongName.innerText = songs[index].songName;
      play.classList.remove("fa-play-circle");
      play.classList.add("fa-pause-circle");
    });
  }
);
// previous and next

document.getElementById("previous").addEventListener("click", () => {
  if (index <= 0) {
    index = 4;
  } else {
    index -= 1;
  }
  sign();
  playSongImg.src = songs[index].imagePath;
  masterSongName.innerText = songs[index].songName;
  audioElement.src = `${index + 1}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  play.classList.remove("fa-play-circle");
  play.classList.add("fa-pause-circle");
});
document.getElementById("next").addEventListener("click", () => {
  if (index >= 4) {
    index = 0;
  } else {
    index += 1;
  }
  sign();
  playSongImg.src = songs[index].imagePath;
  masterSongName.innerText = songs[index].songName;
  audioElement.src = `${index + 1}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  play.classList.remove("fa-play-circle");
  play.classList.add("fa-pause-circle");
});
