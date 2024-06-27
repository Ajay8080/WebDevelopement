let game=prompt("Enter the game number");
let userno=prompt("Enter the guess number:");

while(userno != game){
    userno=prompt("You entered wrong number guess again:");
}
document.write("Congratulation you guess right number");