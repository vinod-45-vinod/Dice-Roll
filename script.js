let images = ["dice-1.jpg",
              "dice-2.jpg",
              "dice-3.jpg",
              "dice-4.jpg",
              "dice-5.jpg",
              "dice-6.jpg"];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        // console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1) );
    },
    500
    );
}
