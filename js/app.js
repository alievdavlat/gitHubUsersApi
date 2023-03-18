  const form = document.querySelector('#form'),
  gitHubParent = document.querySelector('.git-hub'),
  input = document.querySelector('#input')
  

    //request fetch


    form.addEventListener('submit',(e) => {
      e.preventDefault()
      let inputVal = input.value.trim().toLowerCase()

      fetch(`https://api.github.com/users/${inputVal}`)
      .then((data) => {
        return data.json()
      })
      .then((jsondata) => {
        console.log(jsondata);
        getData(jsondata)
      })
      .catch((err) => {
        console.log(err);
      })
      form.reset()
      
  
      
      function getData(data) {
        let arr = []
        arr.push(data)
        arr.forEach(items => {
          gitHubParent.innerHTML = `
          
          
          
         <div class="git-wrapper">
         <section class="user">
           <div class="user-img">
             <img src="${items.avatar_url}" alt=userAvatar"">
           </div>
           <div class="user-name">
             <p>${items.name}</p>
             <p>${items.login}</p>
           </div>
           <p class="user-bio">
             ${items.bio}
           </p>
           <button class="user-changeBtn">
             Edit profile
           </button>
           <div class="user-followers">
             <p class="user-follower">
               <img src="./images/icon.png" width="15px" alt="user"> ${items.followers} follower • ${items.following} following
             </p>
             <br>
             <p><i class="fa-solid fa-building"></i>   ${items.company ? items.company:'this is user do not work at companny' } </p>
             <p> <i class="fa-brands fa-twitter"></i>  ${items.twitter_username ? items.twitter_username: "this is user don't have twitter account" }</p>
           </div>
           <div class="user-location">
             <p>
               <img src="./images/Frame.svg" width="20px" alt="location"> ${items.location}
             </p>
           </div>
         </section>
         <section class="git-repo">
         <a href="${items.html_url}" style="text-decoration:none;" target="_blank">View Profil</a>  
           <nav>
             <ul>
               <li><img src="./images/open-book (2).png"  width="15px" alt="1"> Overview</li>
               <li><img src="./images/file.png" width="15px" alt="2"> Repositories <span>${items.public_repos}</span></li>
               <li><img src="./images/delivery-box.png" width="15px" alt="3"> Projects</li>
               <li><img src="./images/3d-cube.png" width="15px"  alt="4"> Packages</li>
               <li><i class="fa-solid fa-star"></i>Stars <span>${Math.floor(Math.random() * 10)}</span></li>
             </ul>
           </nav>
           <div class="about-user">
             Hi I'm ${items.name} 🖐️
             <i class="fa-solid fa-pen"></i>
 
           </div>
           <div class="repo-title">
             <p>Popular repositories</p>
           </div>
           <ul class="user-repo__cards">
             <li class="user-repo__cards-items">
               <div class="repos">
                 <h4><a href="#">megobitka</a></h4>
                <div class="repos-botom">
                 <div id="circle"></div>CSS
                </div>
               </div>
               <button>
                 Public
               </button>
             </li>
             <li class="user-repo__cards-items">
               <div class="repos">
                 <h4><a href="#">megobitka</a></h4>
                <div class="repos-botom">
                 <div id="circle"style="  background: orangered;"></div>HTML
                </div>
               </div>
               <button>
                 Public
               </button>
             </li>
             <li class="user-repo__cards-items">
               <div class="repos">
                 <h4><a href="#">megobitka</a></h4>
                <div class="repos-botom">
                 <div id="circle" style="  background: orangered;"></div>HTML
                </div>
               </div>
               <button>
                 Public
               </button>
             </li>
             <li class="user-repo__cards-items">
               <div class="repos">
                 <h4><a href="#">megobitka</a></h4>
                <div class="repos-botom">
                 <div id="circle"></div>CSS
                </div>
               </div>
               <button>
                 Public
               </button>
             </li>
             <li class="user-repo__cards-items">
               <div class="repos">
                 <h4><a href="#">megobitka</a></h4>
                <div class="repos-botom">
                 <div id="circle"></div>CSS
                </div>
               </div>
               <button>
                 Public
               </button>
             </li>
             <li class="user-repo__cards-items">
               <div class="repos">
                 <h4><a href="#">megobitka</a></h4>
                <div class="repos-botom">
                 <div id="circle"style="  background: orangered;"></div>HTML
                </div>
               </div>
               <button>
                 Public
               </button>
             </li>
 
           </ul>
            <span style="display:flex;align-items:center;gap:15px;margin-left:30px;">
            <p>profile was created ${items.created_at}</p> - <p>profile was updated ${items.updated_at}</p>
            </span>
           </section>
       </div> 

          
          
          
          `
        });
      }
    })
  
























/* 











*/