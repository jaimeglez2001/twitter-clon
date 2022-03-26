import "modern-css-reset";
import "./../assets/styles/tailwind.css";
import "./../assets/styles/style.css";
import "phosphor-icons";

import mockData from "./data.json";

//const moreThan3Rt = mockData.filter((num) => num.retweet > 6);
//
//const moreThan50Likes = mockData.filter((num) => num.likes > 50);
//
//const moreThan10Char = mockData.filter(
//  (caracteres) => caracteres.tweet_text.split(" ").length >= 15
//);
//
//const searchInput = document.querySelector(".tweet_text input");

//console.log(moreThan3Rt);
//console.log(moreThan50Likes);
//console.log(moreThan10Char);

let filterData = [];
let user = [
  {
    name_account: "Jaime",
    account_link: "jaimeglez",
    upload_time: "10:06 PM",
    tweet_text: "",
    media: "",
    comments: 0,
    likes: 0,
    retweet: 0,
    pic: "https://pbs.twimg.com/profile_images/1472171491009744898/wTS3WE8S_400x400.jpg",
  },
];

// lo que funciona
//let counterVisible = false;
//let isButtonActive = false;
//
//const tweetInputString = document.querySelector(".tweet_input input");
//const tweetInputValue = tweetInputString.value;
//const counterValue = tweetInputValue.length;
//
//const tweetButton = document.querySelector(".tweet_button");
//
//
//
//
//
//const initTextArea = () => {
//  //leemos texto
//  tweetInputString.addEventListener("keyup", () => {
//    const tweetInputValue = tweetInputString.value;
//    console.log(tweetInputString);
//    console.log(tweetInputValue);
//    const counterValue = tweetInputValue.length;
//    console.log(isButtonActive);
//    const renderCounter = () => {
//      if (tweetInputValue == 0) {
//        counterVisible = false;
//        console.log("esto es 0");
//        //desactivar boton
//        isButtonActive = false;
//        console.log(tweetButton);
//        tweetButton.classList.add("desactivated")
//      } else {
//        counterVisible = true;
//        console.log("esto no es 0");
//        //activar boton
//        tweetButton.classList.remove("desactivated")
//        isButtonActive = true;
//      }
//      if (counterVisible) {
//        const counterBlock = document.querySelector(".counter");
//        let counterNum = "";
//        counterNum = `
//          <span>${counterValue}</span>
//                `;
//
//        counterBlock.innerHTML = counterNum;
//      }else{
//        const counterBlock = document.querySelector(".counter");
//        let counterNum = "";
//        counterNum = `
//          <span></span>
//                `;
//
//        counterBlock.innerHTML = counterNum;
//      }
//    };
//    renderCounter();
//  });
//  //check length
//
//  //actualizamos el contador
//};
//
//const initTweetEvent = () =>{
//
//    tweetButton.addEventListener("click", () =>{
//      if(isButtonActive){
//        console.log("has hecho click");
//        mockData.unshift(
//          {
//            "name_account": "Jaime",
//            "account_link": "jaimeglez",
//            "upload_time": "5:09 PM",
//            "tweet_text": tweetInputString.value,
//            "media": "",
//            "comments": "",
//            "likes": 0,
//            "retweet": 0,
//            "pic":"https://pbs.twimg.com/profile_images/1472171491009744898/wTS3WE8S_400x400.jpg"
//          }
//        )
//        renderTweetString()
//        tweetInputString.value = ""
//        initTextArea()
//        console.log("cagaste master");
//      }
//    })
//
//}

//aqui acaba lo que funciona

//lo experimental

window.addEventListener("load", () => {
  initSearchEvents();
  initNewTweetEvents();
  renderTweetString();
});

let isButtonActive = false;

const tweetInputString = document.querySelector(".tweet_input textarea");
let tweetInputValue = "";



const tweetButton = document.querySelector(".tweet_button");

const initTweetEvent = () => {
  tweetButton.addEventListener("click", () => {
    if (isButtonActive) {
      console.log("has hecho click");
      mockData.unshift({
        name_account: "Jaime",
        account_link: "jaimeglez",
        upload_time: "5:09 PM",
        tweet_text: tweetInputString.value,
        media: "",
        comments: "",
        likes: 0,
        retweet: 0,
        pic: "https://pbs.twimg.com/profile_images/1472171491009744898/wTS3WE8S_400x400.jpg",
      });
      renderTweetString();
      tweetInputString.value = "";
      tweetInputValue = "";
      writeTweetHandler();
      checkNewTweetLength();
    }
  });
};

const turnTweetOn = () => {
  //activar boton
  tweetButton.classList.remove("desactivated");
  isButtonActive = true;
};

const turnTweetOff = () => {
  //desactivar boton
  tweetButton.classList.add("desactivated");
  isButtonActive = false;
};

const showCounter = () => {
  const counterBlock = document.querySelector(".counter");
  let counterNum = "";
  counterNum = `
      <span>${140 - tweetInputValue.length}</span>
            `;

  counterBlock.innerHTML = counterNum;

  if (tweetInputValue.length < 140) {
    counterBlock.classList.remove("pass");
    turnTweetOn();
  } else {
    counterBlock.classList.add("pass");
    turnTweetOff();
  }
};

const hideCounter = () => {
  const counterBlock = document.querySelector(".counter");
  let counterNum = "";
  counterNum = `
        <span></span>
              `;

  counterBlock.innerHTML = counterNum;
};

const renderBorder = () => {
  const progressBar = document.querySelector(".progress_bar");
  console.log(progressBar);
  progressBar.style.background = "red";
};

renderBorder();

const checkNewTweetLength = () => {
  if (tweetInputValue.length == 0) {
    hideCounter();
    turnTweetOff();
  } else if (tweetInputValue.length > 0 && tweetInputValue.length < 120) {
    hideCounter();
    turnTweetOn();
  } else {
    showCounter();
  }
};

const writeTweetHandler = () => {
  //leer tweet y actualizar contador
  tweetInputString.addEventListener("keyup", () => {
    tweetInputValue = tweetInputString.value;
    console.log(tweetInputValue);
    checkNewTweetLength();
  });
};
const initNewTweetEvents = () => {
  writeTweetHandler();
  initTweetEvent();
};

const renderTweetString = (data = mockData) => {
  const feedBlock = document.querySelector(".tweet_strings");
  let tweetString = "";
  for (let i = 0; i < data.length; i++) {
    tweetString += `
      <div class="tweet_string">
      <div class="profile_pic">
        <img src="${data[i].pic}" alt="" />
      </div>
      <div class="tweet_meta_content">
        <div class="user_info">
          <div class="user_name">${data[i].name_account}</div>
          <div class="user_link">@${data[i].account_link}</div>
          <div class="dot_icon"><span>·</span></div>
          <div class="tweet_time">12 min</div>
        </div>
        <div class="tweet_content">
          <div class="tweet_info">
            ${data[i].tweet_text}
          </div>
          <div class="tweet_media">
                  <img src="${data[i].media}" width="">
                </div>
          <div class="interact">
            <div class="comment">
              <img src="assets/images/Vector-11.svg" alt="" /><span>${data[i].comments}</span>
            </div>
            <div class="fav">
              <img src="assets/images/Vector-13.svg" alt="" /><span>${data[i].likes}</span>
            </div>
            <div class="retweet">
              <img src="assets/images/Vector-12.svg" alt="" /><span>${data[i].retweet}</span>
            </div>
            <div class="share"><i class="ph-export"></i></div>
          </div>
        </div>
      </div>
    </div>
              `;

    feedBlock.innerHTML = tweetString;
  }
};





const searchInput = document.querySelector(".searchbar_input input");

const initSearchEvents = () => {
  searchInput.addEventListener("keyup", () => {
    const searchInputValue = searchInput.value;
    console.log(searchInputValue);

    if (searchInputValue.length >= 3) {
        filterData = mockData.filter((d) => {
          return d.tweet_text.includes(searchInputValue);
        });
        if(filterData.length > 0){
          renderTweetString(filterData);
        }else{
          const renderError = () => {
            const feedBlock = document.querySelector(".tweet_strings");
            let tweetString = "";
              tweetString += `
              <div class="error_message">
              <h1>No results for "${searchInputValue}"</h1>
              <span>
                The term you entered did not bring up any results. You may have
                mistyped your term or your Search settings could be protecting
                you from some potentially sensitive content.
                </span>
            </div>
                        `;
          
              feedBlock.innerHTML = tweetString;
          };
          
          renderError();
        }
    } else {
      renderTweetString();
    }
  });
};


