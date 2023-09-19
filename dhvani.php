<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="pro1.css">
   
    <title>Music Website</title>
    <style>
    header .song_side::before{
    content: '';
    position: absolute;
   width: 100%;
   height: 259px;
    background: url("Project1/Dhvani/dhvani.png");
    background-size: 450px;
    background-position: 50% 50%; 
    background-repeat: no-repeat;  
    z-index: -1;
 }
</style>
</head>
<body>

    <!-- this code is for background box and color  -->
<header>

<div class="menu_side">

    <h1>Playlist</h1>
     <div class="playlist">
<h4 class="active"> <span></span> <i class="bi bi-music-note-beamed"></i>Playlist</i></h4>
<h4><span></span> <i class="bi bi-music-note-beamed"></i>Last listening</h4>
<h4><span></span> <i class="bi bi-music-note-beamed"></i>Recommended</h4>

     </div>

<!--this code is for adding music and images-->
     <div class="menu_song">
        <li class="songItem">
            <span>01</span>
            <img src="Project1/Images/1.jpg" alt="">
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
            <i class="bi menuBtns bi-play-circle-fill" id="1"></i>
        </li>
        <li class="songItem">
            <span>02</span>
            <img src="Project1/Images/1.jpg" alt="">
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
            <i class="bi menuBtns bi-play-circle-fill" id="2"></i>
        </li>
        <li class="songItem">
            <span>03</span>
            <img src="Project1/Images/1.jpg" alt="">
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
            <i class="bi menuBtns bi-play-circle-fill" id="3"></i>
        </li>
        <li class="songItem">
            <span>04</span>
            <img src="Project1/Images/1.jpg" alt="">
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
            <i class="bi menuBtns bi-play-circle-fill" id="4"></i>
        </li>
        <li class="songItem">
            <span>05</span>
            <img src="Project1/Images/1.jpg" alt="">
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
            <i class="bi menuBtns bi-play-circle-fill" id="5"></i>
        </li>
        <li class="songItem">
            <span>06</span>
            <img src="Project1/Images/1.jpg" alt="">
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
            <i class="bi menuBtns bi-play-circle-fill" id="6"></i>
        </li>
        <li class="songItem">
            <span>07</span>
            <img src="Project1/Images/1.jpg" alt="">
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
            <i class="bi menuBtns bi-play-circle-fill" id="7"></i>
        </li>
       
       
     </div>

</div>

<!-- this code is for song_side sabrina image and middle content-->

<div class="song_side">

<nav>
    <ul>
        <li>Discover<span></span></li>
        <li>MY LIBRARY</li>
        <li>RADIO</li> 

    </ul>
    <div class="search">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search Music...">
        <div class="search_results">
            <!-- <a href="" class="card">
                <img src="img/1.jpg">
                <div class="content">
                    On My Way
                    <div class="subtitle">Sabrina Carpenter</div>
                </div>
            </a>  -->
           
        </div>
    </div>
    <div class="user">
        
    </div>
</nav>
<!--this code is for sabrina content-->
<div class="content">
 <h1>Sabrina Carpenter-Fade</h1>
 <p>You were the shadow to my light did you feel us Another start you fade
<br> Away afraid our aim is out of sight Wanna see us Alive</p>
<div class="buttons">
    <button>PLAY</button>
    <button>FOLLOW</button>
</div>
</div>

<!--this code is for popular song-->
<div class="popular_song">
    <div class="h4">
        <h4>Popular Song</h4>
        <div class="btn_s">
            <i  class="bi bi-arrow-left-short" id="leftScroll"></i>
            <i  class="bi bi-arrow-right-short" id="rightScroll"></i>
        </div>
    </div>

      <div class="songsPop">
         <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="8"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>

             <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="9"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>

             <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="10"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>
                     
             <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="11"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>
                         
             <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="12"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>

             <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="13"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>

             <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="14"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>

             <li class="songItem">
            <div class="img_play">
                <img src="Project1/Images/1.jpg" alt="alan">
                 <i class="bi  menuBtns bi-play-circle-fill" id="15"></i>
                </div>
            <h5>On My Way <br> 
                <div class="subtitle">Alan Walker</div>
            </h5>
             </li>

             

      </div>
</div>

<!--this code is for popular artist-->
<div class="popular_artists">
    
        <div class="h4">
            <h4>Popular Artists</h4>
            <div class="btn_s">
                <i id="left_scrolls" class="bi bi-arrow-left-short"></i>
                <i id="right_scrolls" class="bi bi-arrow-right-short"></i>
            </div>
        </div>  
        <div class="item">
           
        <li> 
                <a href="arjit1.php"><img src="Project1/Images/arjit.jpg" alt="Arjit Singh" title="Arjit Singh"> </a>
            </li>
            <a href="alan.php"> <li> <img src="Project1/Images/alan.jpg" alt="Alan Walker" tile="Alan Walker"> </a>
            </li>
            <li> 
                <a href="atif.php"><img src="Project1/Images/atif.jpg" alt="Atif Aslam" title="Atif Aslam"></a> 
            </li>
            <li> 
                <a href="guru.php"><img src="Project1/Images/guru.jpg" alt="Guru Randhava" title="Guru Randhava"></a> 
            </li>
            <li> 
                <a href="dhvani.php"><img src="Project1/Images/dhvani.jpg" alt="Dhvani" title="Dhvani"></a> 
            </li>
            <li> 
                <a href="ariana.php"><img src="Project1/Images/ariana.jpeg" alt="Ariana Grandde" title="Ariana Grande"></a> 
            </li>
            <li> 
                <a href="jubin.php"><img src="Project1/Images/jubin Nautiyal.jpg" alt="Jubin Nautiyal" title="Jubin Nautiyal"></a> 
            </li>
            <li> 
                <a href="neha.php"><img src="Project1/Images/neha.jpg" alt="Neha Kakkar" title="Neha Kakkar"></a> 
            </li>
            <li> 
                <a href="justin.php"><img src="Project1/Images/justin-bieber-lede.jpg" alt="Justiin Bieber" title="Justin Bieber"></a> 
            </li>
            <li> 
                <a href="honey.php"><img src="Project1/Images/honey.jpg" alt="Honey Singh" title="Honey Singh"></a> 
            </li>
            <li> 
                <a href="hardy.php"><img src="Project1/Images/hardy.jpeg" alt="Hardy Sandhu" title="Hardy Sandhu"></a> 
            </li>
            <li> 
                <a href="kishore.php"><img src="Project1/Images/kishore.jpeg" alt="Kishore Kumar" title="Kishore Kumar"></a> 
            </li> 
            <li> 
                <a href="stan.php"><img src="Project1/Images/stan.jpeg" alt="Mc Stan" title="Mc Stan"></a> 
            </li> 
            <li> 
                <a href="adele.php"><img src="Project1/Images/adele.jpeg" alt="Adele" title="Adele"></a> 
            </li> 



        </div>
</div>
</div>


<!--this code is for masterplay and wave annimations-->
<div class="master_play">
    <div class="wave">
        <div class="wave1"></div>
        <div class="wave1"></div>
        <div class="wave1"></div>
    </div>
    <img src="img/2.jpg" alt="alan" id="poster_master_play">  <!--to download and give another image-->
    <h5 id="title">
        On My Way
        <div class="subtitle">Sabrina Carpenter</div>
    </h5>
    <div class="icon">
        <i class="bi shuffle bi-music-note-beamed">next</i>
        <i class="bi bi-skip-start-fill" id="back"></i>
        <i class="bi bi-play-fill" id="masterPlay"></i>
        <i class="bi bi-skip-end-fill" id="next"></i>
       <a href="" download id="download_music"> <i class="bi bi-cloud-arrow-down-fill" ></i></a>
    </div>
    <!--this code is for volume bar and dot-->
    <span id="currentStart">0:00</span>

    <div class="bar">
        <input type="range"  id="seek" min="0" max="100">
        <div class="bar2" id="bar2"></div>
        <div class="dot"></div>
     </div>
     <span id="currentEnd">0:30</span>
     <div class="vol">
        <i class="bi bi-volume-up-fill" id="vol_icon"></i>
        <input type="range" min="0" max="100" id="vol">
        <div class="vol_bar"></div>
        <div class="dot" id="vol_dot"></div>
        
     </div>
</div>
</header>   

<script src="dhvani.js">



</script>


    
</body>
</html>