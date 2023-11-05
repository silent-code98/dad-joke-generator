//  joke element
const jokeEl = document.querySelector(".joke");
//  button element
const btn = document.querySelector(".generate__btn");

//  defining the function to fetch joke from API Ninjas (API library)
const getJoke = async () => {
  const limit = 1;
  const API_KEY = "oZnkOm9zmSyAZCiMz/iIsg==0unZ3yDSg8YbocLY";
  const API_URI = `https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`;
  // REQUEST options
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY
    },
    ContentType: "application/json"
  };

  try {
    btn.innerText = "Loading...";
    btn.disabled = true;

    //  fethc the joke
    const res = await fetch(API_URI, options);
    const data = await res.json();

    const jokeText = data[0].joke;

    // insert fethced joke into the joke element
    jokeEl.innerText = jokeText;

    btn.innerText = "TELL ME ANOTHER JOKE! 😀😀";
    btn.disabled = false;
  } catch (error) {
    console.log(error);
  }
};

//  event listener
//  generate jok on click of the button
btn.addEventListener("click", getJoke);
