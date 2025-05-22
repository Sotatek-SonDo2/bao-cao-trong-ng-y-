/**
 * 

// cau lenh re nhanh - Switch

var date = 5;

switch(date) {
    case 4:
        console.log('hom nay la thu 2, 3, 4');
        break;
    case 5:
        console.log('hom nay la thu 5');
        break;
    default:
        console.log('khhong biet');
        
}
 

 // toan tu 3 ngoi - Ternary operator


var course = {
    name: 'javascript',
    coin: 250
}

if (course.coin > 0){
    console.log(`${course.coin} coins`);
} else {
    console.log('mien phi');
}

var result = course.coin > 0 ? `${course.coin} coins` :'mien phi';
console.log(result);

var a = 1;
var b = 2;

var c = a > 0 ? a : b ; 


 // vong lap - for loop

var myArray = [
'Javascript',
'php',
'java',
'dart',
'ruby',
'python'
 ];

var arrayLength = myArray.length;

 for(var i = 1; i <= arrayLength; i++){
    console.log(i); 
 } 
 
// for/in loop



var myString = 'javascript';


var languager = 'javascript';
    
    for (var key in languager) {
        console.log(languager[key]);

    }

//for/of
   var myInfo = {
    name: 'Son Do',
    age: 18
   };
   for(var value of Object.values(myInfo)) {
   console.log(value);
   }

//while loop

var myArray = [
    'javwscript',
    'PHP',
    'ruby'
]

var i = 0;

while (i < myArray.length) {
    console.log(myArray);
    i++;
} 

// do/while loop

var i = 0;
var isSuccess = false;

do {
    i++;

    console.log('nap the thanh cong!');
    //thah cong
    if (true) {
        isSuccess = true;
    }

} while (!isSuccess && i <= 3);

// Break & Continue in Loop
for (var i = 0; i < 10; i++) {
    if (i%2 !== 0) {
        continue;
    }

    console.log(i);
}  */