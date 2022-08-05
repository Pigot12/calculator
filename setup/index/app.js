//Αναπαριστούν τι χρώματα θα έχουμε.

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//button
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click' ,() => {
//Edo ua mpei h logikh mas.
//get random number beetween 0 -3 color[0]

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}