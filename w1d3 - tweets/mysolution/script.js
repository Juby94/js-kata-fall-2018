fetch("https://kea-alt-del.dk/twitter/api/?hashtag=beer")
  .then(res => res.json())
  .then(showContent);

function showContent(data) {
  console.log(data.statuses);
  data.statuses.forEach(tweet => {
    console.log(tweet.user.name);
    let template = document.querySelector("#teamplate_test").content;
    let clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = tweet.text;
    clone.querySelector("p").textContent = tweet.user.name;
    document.body.appendChild(clone);
  });
}
//teamplate_test
