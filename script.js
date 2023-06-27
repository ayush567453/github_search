const url = "https://api.github.com/users";
const searchInputEl = document.getElementById("searchInput");
const searchButtonEl = document.getElementById("searchBtn");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");
const generateProfile = (profile) =>{
    return `
    <div class="profile-box">
        <div class="top">
            <div class="left">
                <div class="imgs">
                    <img src="${profile.avatar_url}" id="imgs" alt="">
                </div>
                <div class="name">
                    <h1>${profile.name}</h1>
                    <h1>@${profile.login}</h1>
                </div>
                
            </div>
            <a href="${profile.html_url}" target="_black">
            <button class="btn">check Profile</button>
        </div>
        <div class="about">
            <div class="bio">
                <h1>About</h1>
                <p>${profile.bio}</p>
            </div>

        </div>
        <div class="bottom">
            <div class="followers">
            <p>${profile.followers}</p>
                <h3>2</h3>
            </div>
            <div class="followers">
                <h1>Followings</h1>
                <p>${profile.following}</p>
            </div>
            <div class="followers">
                <h1>Repos</h1>
                <p>${profile.public_repos}</p>
            </div>
        </div>
    </div>
    `;
};

const fetchprofile = async () => {
    const username = searchInputEl.value;
  
    loadingEl.innerText = "loading.....";
    loadingEl.style.color = "black";
  
    try {
      const res = await fetch(`${url}/${username}`);
      const data = await res.json();
      if (data.bio) {
        loadingEl.innerText = "";
        profileContainerEl.innerHTML = generateProfile(data);
      } else {
        loadingEl.innerHTML = data.message;
        loadingEl.style.color = "red";
        profileContainerEl.innerText = "";
      }
  
      console.log("data", data);
    } catch (error) {
      console.log({ error });
      loadingEl.innerText = "";
    }
  };
  
  searchButtonEl.addEventListener("click",fetchprofile)