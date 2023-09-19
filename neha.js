// this code is to add musi
const music = new Audio ('Project1/Neha/Audio/1.mp3');
//music.play();


// here we create array which contain id,songname,artists name and images
const songs = [

    {
        id: '1',
        songName: `Chhama Chhama <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/1.jpg",
       
    },
    {
        id: '2',
        songName: `Ek Toh Kum Zindagani <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/2.jpg",
       
    },
    {
        id: '3',
        songName:  `Gali Gali <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/3.jpg",
       
    },
    {
        id: '4',
        songName: `Dum Maro Dum <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/4.jpg",
       
    },
    {
        id: '5',
        songName: `Yaad Piya Ki Aane Lagi <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/5.jpg",
       
    },
    {
        id: '6',
        songName: `Lamborgini <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/6.jpg",
       
    },
    {
        id: '7',
        songName: `Nikle Current <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/7.jpg",
       
    },
    {
        id: '8',
        songName: `Aankh Marey <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/8.jpg",
        
    },
    {
        id: '9',
        songName: `Tera Ghata <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/9.jpg",
       
    },
    {
        id: '10',
        songName: `Dil Ko Karaar Aaya <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/10.jpg",
       
    },
    {
        id: '11',
        songName: `Odhani <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/11.jpg",
       
    },
    {
        id: '12',
        songName: `Maahi Ve <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/12.jpg",
        
    },
    {
        id: '13',
        songName: `Teri Aankhon Mein <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/13.jpg",
       
    },
    {
        id: '14',
        songName: `Taaron Ke Sher Mein <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/14.jpg",
       
    },
    {
        id: '15',
        songName: `Chhote Chhote Peg <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "Project1/Ariana/Img/15.jpg",
        
    }
    
   

]

// by these code we have change all the posters and song names using array 
   Array.from(document.getElementsByClassName('songItem')).forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
   
});

// this code is for search bar it starts from here
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element =>{  // here we take for each loop to target every poster,id and songName by array which we create up by name (songs)
    const {id,songName,poster} = element;
    //  console.log(songName);

    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id; // this we create for if we click on any of the item present in search button it will take us to the that song.
    card.innerHTML = `<img src="${poster}">
    <div class="content">
        ${songName}
  </div>`
;
  search_results.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () =>{ // keyup is use for if we click on any key it will match it.
    let input_value = input.value.toUpperCase(); // uppercase is use for if any one type in small and upper letter it should match it.
    let items = search_results.getElementsByTagName('a');// here we use a bcauz we want items which are present in search_results.

    for (let index = 0; index < items.length; index++) {  

        let as = items[index].getElementsByClassName('content')[0]; // here we take (as)  as a variable
        let text_value = as.textContent || as.innerHTML; 

        if (text_value.toUpperCase().indexOf(input_value) > -1) {  // we use nested if else statement becauz if try to search items it should display.
            
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (index.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        
    }
})
 
//and End here 


  let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

 masterPlay.addEventListener('click',() =>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
         music.pause();  
         masterPlay.classList.add('bi-play-fill');
         masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }

}); 

  const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('menuBtns')).forEach((element)=>{
        element.classList.add('bi-play-circle-fill');
         element.classList.remove('bi-pause-circle-fill');
    
        });  
  }  

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = ' rgb(105, 105, 105, .0) ';
    })
}






let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');//this for download button
let title = document.getElementById('title');

Array.from(document.getElementsByClassName(' menuBtns')).forEach((element)=>{
  element.addEventListener('click',(element)=>{
   index = element.target.id;
       music.src = `Project1/Neha/Audio/${index}.mp3`;
      poster_master_play.src = `Project1/Ariana/Img/${index}.jpg`;
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
       download_music.href = `Project1/Neha/Audio/${index}.mp3`;//this is to start download button

      let songTitles = songs.filter((els) =>{  
        return els.id == index;
  });

  songTitles.forEach(elss =>{
      let {songName} = elss;
      title.innerHTML = songName;
      download_music.setAttribute('download',songName);//this is for if we click on download then it will download song by songname thats why attribute.
  });
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
       
       makeAllPlays();
       element.target.classList.remove('bi-play-circle-fill');
       element.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active2');
   });  

});   


// this code is for volume bar and all

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot');

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
   

  
   let min1 = Math.floor(music_dur / 60);
   let sec1 = Math.floor(music_dur % 60);

   // console.log(min1);
  
   if(sec1 < 10){
    sec1 = `0${sec1}`;
   }

   currentEnd.innerText = `${min1}:${sec1}`;

   let min2 = Math.floor(music_curr / 60);
   let sec2 = Math.floor(music_curr % 60);

   
   if(sec2 < 10){
    sec2 = `0${sec2}`;
   }
   currentStart.innerText = `${min2}:${sec2}`;



   let progressBar = parseInt((music_curr / music_dur) * 100);
   seek.value = progressBar;
  // console.log(seek.value);

  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
}); 


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;

    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }

    music.src = `Project1/Neha/Audio/${index}.mp3`;
      poster_master_play.src = `Project1/Ariana/Img/${index}.jpg`;
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');


      let songTitles = songs.filter((els) =>{  
        return els.id == index;
  });

  songTitles.forEach(elss =>{
      let {songName} = elss;
      title.innerHTML = songName;
      
  });
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
       
       makeAllPlays();
       element.target.classList.remove('bi-play-circle-fill');
       element.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active2');
});

next.addEventListener('click',()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length) {
     index = 1;  
    }

    music.src = `Project1/Neha/Audio/${index}.mp3`;
      poster_master_play.src = `Project1/Ariana/Img/${index}.jpg`;
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');


      let songTitles = songs.filter((els) =>{  
        return els.id == index;
  });

  songTitles.forEach(elss =>{
      let {songName} = elss;
      title.innerHTML = songName;
      
  });
       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
       
       makeAllPlays();
       element.target.classList.remove('bi-play-circle-fill');
       element.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active2');
})




// this code is for popular song buttons to move
 
let leftScroll = document.getElementById('leftScroll');
let rightScroll = document.getElementById('rightScroll');
let songsPop = document.getElementsByClassName('songsPop')[0];

rightScroll.addEventListener('click',()=>{
    songsPop.scrollLeft  += 300;
});

leftScroll.addEventListener('click',()=>{
    songsPop.scrollLeft  -= 330;
});



// this code is for popular artists buttons
 let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0]; 


right_scrolls.addEventListener('click', () => {
    item.scrollLeft += 330;
});

left_scrolls.addEventListener('click', () => {
    item.scrollLeft -= 330;
});   






// this code is for shuffle icon (means music button)

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{  // this code is for if we click on shuffle icon it will change to next,repeat and random.
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
                break;
    }
});





const next_music = () => { // we have created this array to play next song after one gets end
  // index ++;

  if(index == songs.length){ //we did this condition for if our last song get ended then we go back to the first song here(songs.length,songs is array where we store all song poster and name.)
    index = 1

   } else{
    index++;
   }

    music.src = `Project1/Neha/Audio/${index}.mp3`;
   poster_master_play.src = `Project1/Ariana/Img/${index}.jpg`;
   music.play();
   masterPlay.classList.remove('bi-play-fill');
   masterPlay.classList.add('bi-pause-fill');
    download_music.href = `Project1/Neha/Audio/${index}.mp3`;//this is to start download button

   let songTitles = songs.filter((els) =>{  
     return els.id == index;
});

songTitles.forEach(elss =>{
   let {songName} = elss;
   title.innerHTML = songName;
   download_music.setAttribute('download',songName);//this is for if we click on download then it will download song by songname thats why attribute.
});
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    
    makeAllPlays();
    element.target.classList.remove('bi-play-circle-fill');
    element.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active2');
}


const repeat_music = () => { // we have created this array to play repeat song after one gets end
     index;// we just remove above if-else statement here if song get end it should repeat.
  
     music.src = `Project1/Neha/Audio/${index}.mp3`;
     poster_master_play.src = `Project1/Ariana/Img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');
      download_music.href = `Project1/Neha/Audio/${index}.mp3`;//this is to start download button
  
     let songTitles = songs.filter((els) =>{  
       return els.id == index;
  });
  
  songTitles.forEach(elss =>{
     let {songName} = elss;
     title.innerHTML = songName;
     download_music.setAttribute('download',songName);
  });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
      
      makeAllPlays();
      element.target.classList.remove('bi-play-circle-fill');
      element.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active2');
  }

  const random_music = () => { // we have created this array to play random song after one gets end
    
  
    if(index == songs.length){ 
      index = 1
  
     } else{
      index = Math.floor(Math.random() * songs.length + 1);
     }
  
      music.src = `Project1/Neha/Audio/${index}.mp3`;
     poster_master_play.src = `Project1/Ariana/Img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');
      download_music.href = `Project1/Neha/Audio/${index}.mp3`;//this is to start download button
  
     let songTitles = songs.filter((els) =>{  
       return els.id == index;
  });
  
  songTitles.forEach(elss =>{
     let {songName} = elss;
     title.innerHTML = songName;
     download_music.setAttribute('download',songName);//this is for if we click on download then it will download song by songname thats why attribute.
  });
      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
      
      makeAllPlays();
      element.target.classList.remove('bi-play-circle-fill');
      element.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active2');
  }


  music.addEventListener('ended',()=>{ // here we invoke all all the above functions we have created.
        
      let b = shuffle.innerHTML;

      switch (b) {
        case 'repeat':
            repeat_music();
            break;
      
        
                case 'next':
                    next_music();
                    break;
      
                    
                        case 'random':
                            random_music();
                            break;
                      
       
                    }
});
  