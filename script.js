//Callback function
// const posts = [
//     {
//         title: "post-one", body: "This is post one description"
//     },
//     {
//         title: "post-two", body: "This is post two description"
//     },
//     {
//         title: "post-three", body: "This is post three description"
//     },
// ]

// function getPost(){
//     setTimeout(function(){
//         let output = "";
//         posts.forEach((posts, index)=>{
//             output += `<li class="display-1">${posts.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     },2000)
// }

// function createPost(c_post) {
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             posts.push(c_post);
    
//             const err = false
    
//             if(!err){
//                 resolve();
//             }else{
//                 reject("Error: Something Went Wrong!!!")
//             }
//         },4000)
//     })
// }

// createPost ({title: "post-4", body: "This is post one description"}).then(getPost)
// getPost();

// practicing promise
// const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

// function getPost(){
//     fetch(url)
//     .then(res=>{
//         return res.json();
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
// }

// getPost()

// Async and Await
// async function fn(){
//     return 1 
// }

// console.log(fn());
// const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'

// async function getPost(){
//     const res = await fetch (url)
//     const data = await res.json()
//     console.log(data);
// }

// async function getPost2(){
//     try{
//         const res = await fetch (url)
//         if(!res.ok){
//             throw new Error("Something Definetelly Went Wrong!!!!")
//         }else{
//             const data = await res.json()
//             console.log(data);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// // getPost()
// getPost2()



// Async practice
// const getData = async () => {
//     let data = "Hello-World"
//     return data
// }
// getData().then(data => console.log(data))

// Await Practice
// const getData = async () =>{
//     let y = await "Hello-World"
//     console.log(y);
// }
// console.log(1);
// getData()
// console.log(2);

// async and await practice
// function asynchronous_operational_method (){
//     let first_promise = new Promise ((resolve,reject) => resolve("Hello-World"))

//     let second_promise = new Promise ((resolve,reject) => {
//         setTimeout(() =>{
//             resolve("Geek for Geeks");
//         },2000);
//     });

//     let combined_promise = Promise.all([first_promise,second_promise]);
//     return combined_promise;
// }

// async function display (){
//     let data = await asynchronous_operational_method();
//     console.log(data);
// }

// display();

