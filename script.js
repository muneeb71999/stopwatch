///*
//(function () {
//    let para = document.getElementsByTagName('p');
//    for (let i = 0; i < para.length; i++) {
//        para[i].innerHTML = 'Muneeb Akram';
//    }
//})();
//*/
//
///*(function () {
//    let script = document.createElement('script');
//    script.src = 'http://127.0.0.1:55227/script.js';
//    document.body.appendChild(script);
//})();*/
////let arr = document.getElementsByTagName('li');
///*
//
//const newArr = arr.map(el => {
//    return el.innerHTML;
//});
//console.log(newArr);
//*/
//
//const arr = document.querySelectorAll('.li');
//console.log(arr);
//
//for (var i = 0; i < arr.length; i++) {
//
//    console.log(arr[i].innerHTML);
//
//}
//
//
//class Person {
//    constructor(name, age ,gender) {
//        this.name = name;
//        this.age = age;
//        this.gender = gender;
//    }
//    
//    showDetail(){
//       return `Your name is ${this.name} and age is ${this.age} years.`;
//    }
//    
//}
//
///*
//let muneeb = new Person('Muneeb Akram', 20, 'Male');
//*/
//
//class Athlete extends Person {
//    
//    constructor(name, age, gender, game = 'cricket', medals = 0){
//        super (name, age, gender);
//        this.game = game;
//        this.medals = medals;
//    }
//    
//    showGame(){
//        console.log(`${super.showDetail()} Your favourit game is ${this.game} and you have won ${this.medals} medals`);    
////        super.showDetail();
//    }
//}
//
//muneeb = new Athlete('Muneeb Akram', 20, 'Male',);
//muneeb.showGame();
//
//const obj = {
//    name : 'muneeb Akram',
//    class : 'Fsc',
//    BloodGroup :  'A +'
//}
//
//console.log(obj)
/*
let isTrue = true;

function getTime(clicks) {

        setInterval(function () {
            date = new Date();
            document.querySelector('.date').innerHTML = `${date.getHours()} -${date.getMinutes()} - ${date.getSeconds()} - ${date.getMilliseconds().toString().slice(0,1)} `;
        }, 1000);

    } else {
        var date = new Date();
        document.querySelector('.date').innerHTML = `${date.getHours()} -${date.getMinutes()} - ${date.getSeconds()} - ${date.getMilliseconds().toString().slice(0,1)} `;
    }

}

let count = 0;

document.querySelector('.btn-stop').addEventListener('click', () => {
    count++
    if (count % 2 === 1) {
        setTimeout(function () {

        }, 1000);
    }
});


*/

let nInterval;
let [hour, minute, second] = [0, 0, 0];

const DisplayTime = () => {
    document.querySelector('.date').innerHTML = `${hour} - ${minute} - ${second}`;
};

const stopTime = () => {
    clearInterval(nInterval);
};

const getTime = () => {
    nInterval = setInterval(function () {
        if(second <= 58){
            second++
        }else{
            second = 0;
            if(minute <= 58){
            minute++
            }else{
                minute = 0;
                hour++
            }
        }
        DisplayTime();
        
    }, 1000);
};

const resetTime = () => {
    stopTime();
    hour = 00;
    minute = 00;
    second = 00;
    DisplayTime();
    
}

// Event Listeners 
document.querySelector('.btn-start').addEventListener('click', getTime);
document.querySelector('.btn-stop').addEventListener('click', stopTime);
document.querySelector('.btn-reset').addEventListener('click', resetTime);
