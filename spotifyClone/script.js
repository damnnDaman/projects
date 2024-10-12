console.log("lets start with javascript");
let currentSong = new Audio();
async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/projects/spotifyClone/songs");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");

  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      //playSong(songs[1]);
      songs.push(element.href.split("/spotifyClone/")[1]);
    }
  }

  return songs;
}

function playSong(song) {
//   var audio = new Audio ( song);
  currentSong.src =song;
  console.log(currentSong);
  currentSong.play();
  document.querySelector(".songtitle").innerHTML =song.replaceAll("songs/", "").split(".mp3")[0];
  

 
}

async function main() {
  //getting the songs info into an array
  const songsArr = await getSongs();
 
 let play = document.querySelector("#playit");
  let songUL = document
    .querySelector(".listofsongs")
    .getElementsByTagName("ul")[0];

  let listItems = "";
  for (const song of songsArr) {
    listItems += `<li>
          <div class = "borderforsong">
           <img class = "invert" src = "include/list.svg" alt = " ">
        <div class = "songinfo">
         ${song.replaceAll("%20", " ")}
         </div>
         <img class = "invert libraryPlaybutton" src="include/play.svg" alt="yo"></img>
         </div>
         </li> `;
  }
  songUL.innerHTML = listItems;

  Array.from(
    document.querySelector(".listofsongs").getElementsByTagName("li")
  ).forEach((e) => {
    let songInfoElement;
    let borderElement = e.getElementsByClassName("borderforsong")[0];
    if (borderElement) {
      songInfoElement = borderElement.querySelector(".songinfo");
      if (songInfoElement) {
        console.log(songInfoElement.innerHTML);
      } else {
        console.log("No .songinfo element found in this .borderforsong");
      }
    }

    //Attach an event listener to play a song
    e.addEventListener("click", (element) => {
      console.log(songInfoElement.innerHTML);
        playSong(songInfoElement.innerHTML);
         play.src = "include/pause.svg";
    });
  });
    
   
    console.log(play);
    //ATTACH AN EVENT LISTENER TO PLAY, NEXT AND PREVIOUS
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "include/pause.svg"
        }
        else {
            currentSong.pause()
             play.src = "include/circle-play-regular.svg";
        }
    })
}

main();
