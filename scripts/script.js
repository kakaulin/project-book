//Функция рандомного d20

function randomDungeon()
{
    let num = Math.floor(Math.random() * 20) + 1;
    document.getElementById("answerRandomD20").innerHTML = num;
}