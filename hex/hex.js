const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
/* Θα χρησιμοποιησουμε πολλές ιδιότητες από το Main.js*/
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click' , () => {
    let hexColor = '#';  
    for(let i = 0 ; i < 6 ; i++){
        /* Χρειάζεται να δτιάξω μια function όπου θα παίρνει random Numbers από το array */
        hexColor +=  hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})

/*Θα το πολλαπλασιάσω με το length ώστε να παίρνω τιμές από όλο το array */
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}