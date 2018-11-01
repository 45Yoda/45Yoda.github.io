var quoteText = [
    "Cats use their tails for balance and have nearly 30 individual bones in them!",
    "In ancient Egypt killing a cat was a crime punishable by death.",
    "Did you know that the first cat show was held in 1871 at the Crystal Palace in London? Mee-wow!",
    "Cats bury their feces to cover their trail from predators.",
]

function fkon() {
    document.getElementById("here").innerHTML = quoteText[Math.floor(Math.random() * quoteText.length)];
}



