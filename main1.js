/*
// vong lap long nhau - nested loop

var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (var i = 0; i < myArray.length; i++) {
    for (var i = 0; i < myArray[i].length; i++) {
        console.log (myArray[i][j]);
    }
}*/

/**
 * map()


var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100

    },
      {
        id: 2,
        name: 'hHTML, CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 200
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 480
    },
   
]; */

/*//map
function courseHandler(course) {
    //console.log(course);
    return`<h2>${course.name}<h2>`;
}

var newCourses = courses.map(courseHandler);

console.log(newCourses);
*/

// reduce
/** var totalCoin = course.reduce((a, b) => 
a + b.coin, 0
);
console.log(totalCoin);

// bien luu tru
 var totalCoin = 0;

// lap qua cac phan tu
for (var course of course) {

    // thuc hien viec luu tru
    totalCoin += course.coin;
}

console.log(totalCoin); */

//flat - "lam phang" mang tu Depth array - "mang sau"

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9, ]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem)
}, []);

console.log(flatArray);

//lay ra cac khoa hoc dua vao 1 mang moi
var topics = [
    {
        topic:"Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 1,
                title: "javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            }
        ]
    },
];

var newCourses = topics.reduce(function (courses, topic){

}, []);


console.log(newCourses);
var html = newCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(htmls.join(''));