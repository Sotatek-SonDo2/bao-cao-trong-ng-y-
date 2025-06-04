// //fetch
// const users = [
//     { id: 1, name: 'xuan son' },
//     { id: 2, name: 'hoang dung' },
//     { id: 3, name: 'thi ngan' }
// ];

// const comments = [
//     { id: 1, user_id: 1, content: 'anh sơn chưa ra video :(' },
//     { id: 2, user_id: 2, content: 'vừa ra xong em ơi!' }
// ];

// // Fake API
// function getComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(comments), 1000);
//     });
// }

// function getUsersByIDs(userIds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const result = users.filter(user => userIds.includes(user.id));
//             resolve(result);
//         }, 1000);
//     });
// }

// // Hàm xử lý chính dùng async/await
// async function renderComments() {
//     const comments = await getComments();
//     const userIds = comments.map(c => c.user_id);
//     const users = await getUsersByIDs(userIds);

//     const commentBlock = document.getElementById('comment-block');
//     let html = '';

//     comments.forEach(comment => {
//         const user = users.find(u => u.id === comment.user_id);
//         if (user) {
//             html += `<p><b>${user.name}</b>: ${comment.content}</p>`;
//         }
//     });

//     commentBlock.innerHTML = html;
// }

// // Gọi hàm
// renderComments();


// // json

// {
//   "name": "xuan son",
//   "age": 25,
//   "isTeacher": true,
//   "skills": {
//     "frontend": ["HTML", "CSS", "JavaScript"],
//     "backend": ["Node.js", "Express"]
//   }
// };


// var jsonString = '{"name": "Son", "age": 25}';
// var obj = JSON.parse(jsonString);

// console.log(obj.name); // Son

// var obj = { name: "Son", age: 25 };
// var jsonString = JSON.stringify(obj);

// console.log(jsonString); // '{"name":"Son","age":25}'


// Functions
// function getCourses(callback) {
//     fetch(courseApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function createCours(data){
//     var Options = {
//        method: 'POST',
//        body: JSON.stringify(data)
//     };
//      fetch(courseApi, Option)
//      .then(function(response){
//         response.json();
//      })
//      .then(callback);
// }

// function renderComments(courses) {
//     var listCoursesBlock = document.querySelector('#list_courses');
//     var htmls = courses.map(function(course) {
//         return `
//         <li>
//             <h4>${course.name}</h4>
//             <p>${course.description}</p>
//         </li>
//         `;
//     });
//     listCoursesBlock.innerHTML = htmls.join('');
// }

// function handleCreateForm(){
//     var createBtn = document.querySelector('#create')

//         createBtn.onclick = function(){
//             var name = document.querySelector('#input[name="name').nodeValue;
//             var description = document.querySelector('#input[name="description').nodeValue;
            
//             var formData = {
//                 name: name,
//                 description: description
//             };

//             createCourse(formData);
//         }
// }
