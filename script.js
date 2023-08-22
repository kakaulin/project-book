// Операторы ↓

function Summation(firstNumber, secondNumber)
{
    document.getElementById("answerSummation").style.color = "black";
    const result = 
    document.getElementById("answerSummation");
    result.innerHTML = firstNumber + secondNumber;
}

function Subtraction(firstNumber, secondNumber)
{
    document.getElementById("answerSubtraction").style.color = "black";
    const result =
    document.getElementById("answerSubtraction");
    result.innerHTML = firstNumber - secondNumber;
}

function Multiplication(firstNumber, secondNumber)
{
    document.getElementById("answerMultiplication").style.color = "black";
    const result =
    document.getElementById("answerMultiplication");
    result.innerHTML = firstNumber * secondNumber;
}

function Division(firstNumber, secondNumber)
{
    document.getElementById("answerDivision").style.color = "black";
    const result =
    document.getElementById("answerDivision");
    result.innerHTML = firstNumber / secondNumber;
}

// Рандомное время на китайском ↓

function randomChineseTime()
{
    function pickRandom(words)
    {
        return words[Math.floor(Math.random() * words.length)];
    }
    function generateRandomTime()
    {
        let hour = [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
        let minute = [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一", "三十二", "三十三", "三十四", "三十五", "三十六", "三十七", "三十八", "三十九", "四十", "四十一", "四十二", "四十三", "四十四", "四十五", "四十六", "四十七", "四十八", "四十九", "五十", "五十一", "五十二", "五十三", "五十四", "五十五", "五十六", "五十七", "五十八", "五十九"];
        const randomString = "现在" + pickRandom(hour) +"点" + pickRandom(minute) + "分";
        return randomString;
    }
    document.getElementById("randomChineseTimeAnswer").style.color = "black";
    const result =
    document.getElementById("randomChineseTimeAnswer");
    result.innerHTML = generateRandomTime();
}

// Функции с объектами ↓

function sumObject()
{
    let salaries =
    {
        John: 100,
        Ann: 160,
        Pete: 130,
    };

    let sum = 0;

    for (let x in salaries)
    {
        sum += salaries[x];
    }

    let count = 0;

    for (let y in salaries)
    {
        count+= 1;
    }

    document.getElementById("answerSumOblect").style.color = "black";
    const result =
    document.getElementById("answerSumOblect");
    result.innerHTML = sum / count;
}

function multiplyNumeric()
{
    let obj =
    {
        firstNumber: 100,
        secondNumber: 150,
        name: "Jonh",
    }

    let result = "";

    for (let x in obj)
    {
        if (typeof obj[x] == "number")
        {
            result += (obj[x] * 2) + " ";
        }
    }

    document.getElementById("answerMultiplyNumeric").style.color = "black";
    document.getElementById("answerMultiplyNumeric").innerHTML = result;
}

function meatConstructObject()
{
    function meat(protein, fat, carbohydrates, calories)
    {
        this.protein = protein;
        this.fat = fat;
        this.carbohydrates = carbohydrates;
        this.calories = calories;
    }

    let chicken = new meat("25.5", "10.8", "0", "207");
    let pork = new meat("16", "21.6", "0", "259");
    let beef = new meat("18.9", "12.4", "0", "187");

    let resultChicken = "";
    for (let x in chicken)
    {
        resultChicken += chicken[x] + ", ";
    }

    let resultPork = "";
    for (let x in pork)
    {
        resultPork += pork[x] + ", ";
    }

    let resultBeef = "";
    for (let x in beef)
    {
        resultBeef += beef[x] + ", ";
    }

    document.getElementById("answermeatConstructObject").style.color = "black";
    document.getElementById("answermeatConstructObject").innerHTML = 
    "Курица (БЖУ): " + resultChicken + "<br>" +
    "Свинина (БЖУ): " + resultPork + "<br>" +
    "Говядина (БЖУ): " + resultBeef;

}

//Функция рандомного d20

function randomDungeon()
{
    let num = Math.floor(Math.random() * 20) + 1;
    document.getElementById("answerRandomD20").style.color = "black";
    document.getElementById("answerRandomD20").innerHTML = num;
}

//Добавление значения из поля ввода

function addItem()
{
    let input = document.getElementById("input");
    let list = document.getElementById("list");
    let item = document.createElement("li");
    item.innerHTML = '<input type="checkbox" onchange="strikeThrough(this)">' + input.value + '<button onclick="removeTask()" class="button_delete">Удалить задачу</button>';
    list.appendChild(item);
    input.value = "";

}

//Зачеркивание слов при нажатии на чекбокс

function strikeThrough(checkbox)
{
    let li = checkbox.parentNode;
    if (checkbox.checked)
    {
        li.style.textDecoration = "line-through";
    }
    else
    {
        li.style.textDecoration = "none";
    }
}

//Удаление элемента списка с помощью кнопки

function removeTask()
{
    let button = event.target; // получаем ссылку на кнопку
    let li = button.parentNode; // получаем ссылку на родительский элемент кнопки (li)
    li.remove(); // удаляем элемент списка
}

// Функции с циклами For, For In, For Of, While ↓

function loopFor()
{
    const rap = ["рукоблуд", "ссанина", "очкоблядун", "вагина", "сука", "ебланище", "влагалище", "пердун", "дрочила"];
    let text = "";
    for (let i = 0; i < (rap.length - 1); i++)
        {
            text += rap[i] + ", ";
        }
    document.getElementById("answerLoopFor").style.color = "black";
    const result =
    document.getElementById("answerLoopFor");
    result.innerHTML = text + rap[rap.length - 1];
}

function loopForIn()
{
    const person = 
    {
        fname:"John",
        name:"Doe",
        age:25
    };

    let txt = "";
    for (let x in person)
    {
        txt += person[x] + ", ";
    }

    document.getElementById("answerloopForIn").style.color = "black";
    document.getElementById("answerloopForIn").innerHTML = txt;
}

function loopForOf()
{
    let word = "УРАЛВАГОНЗАВОД";
    let result = "";
    for (let i of word)
    {
        result += i + "<br>";
    }
    document.getElementById("answerLoopForOf").style.color = "black";
    document.getElementById("answerLoopForOf").innerHTML = result;
}

function loopForEach()
{
    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    function myFunction(value)
    {
      txt += value + "<br>"; 
    }
    numbers.forEach(myFunction);

    document.getElementById("answerloopForEach").style.color = "black";
    document.getElementById("answerloopForEach").innerHTML = txt;
}

function evenNumbers()
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = "";
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] % 2 == 0)
        {
            result += numbers[i] + ", ";
        }
    }

    document.getElementById("answerevenNumbers").style.color = "black";
    document.getElementById("answerevenNumbers").innerHTML = result;
}

//Цикл While и Do While ↓

function loopWhile()
{
    let text = "";
    let i = 1;
    while (i <= 10)
    {
        text += "<br>" + i;
        i++;
    }
    document.getElementById("answerloopWhile").style.color = "black";
    document.getElementById("answerloopWhile").innerHTML = text;
}

function loopDoWhile()
{
    let text = "";
    let i = 1;
    do {
        text += "<br>" + i;
        i++;
    }
    while (i <= 10);
    document.getElementById("answerloopDoWhile").style.color = "black";
    document.getElementById("answerloopDoWhile").innerHTML = text;
}

// Функции c if

function ifOperator()
{
    let accessAllowed;
    let age = prompt('Сколько тебе лет?');
    if (age >= 18)
    {
        accessAllowed = "Окей, проходи взрослик";
    }
    else
    {
        accessAllowed = "Стопэ, ты еще не дорос до такого";
    }
  alert(accessAllowed);
}

function ifOperator2()
{
    let answer = prompt("Сколько лет Путин находится у власти?");
    let message = (answer == 23) ? "Правильно, все так..." :
    (answer < 23) ? "Неа, побольше" :
    (answer > 23) ? "Нет, но может быть и до такого дойдет...":
    "";
    alert(message);
}

function switchOperator()
{
    let answer = prompt("Сколько тебе лет?");
    switch (answer)
    {
        case "12":
        case "13":
            message = "Даже паспорта нет, ппц";
            break;
        case "14":
        case "15":
        case "16":
        case "17":
            message = "Тупо подросток";
            break;
        case "18":
        case "19":
        case "20":
            message = "Чел, хорош";
            break;
        default:
            message = "Неприемлемый возраст!";
    }
    alert(message);
}