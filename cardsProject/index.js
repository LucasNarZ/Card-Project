const decks = document.querySelectorAll(".cards")
const right = document.querySelector(".right");
const left = document.querySelector(".left")
let currentTarget = 0;

const toRight = () => {
    currentTarget++
    if(currentTarget == decks.length){
        currentTarget = 0
    }
    decks[currentTarget].dataset.status = "active";
    decks[currentTarget - 1 == -1 ? decks.length - 1 : currentTarget - 1].dataset.status = "leftunactive";
    decks[currentTarget + 1 > decks.length - 1 ? 0 : currentTarget + 1].dataset.status = "rightunactive";
}
const toLeft = () => {
    currentTarget--
    if(currentTarget < 0){
        currentTarget = decks.length - 1
    }
    decks[currentTarget].dataset.status = "active";
    decks[currentTarget - 1 == -1 ? decks.length - 1 : currentTarget - 1].dataset.status = "leftunactive";
    decks[currentTarget + 1 > decks.length - 1 ? 0 : currentTarget + 1].dataset.status = "rightunactive";
}
right.addEventListener("click", toRight)
left.addEventListener("click", toLeft)
