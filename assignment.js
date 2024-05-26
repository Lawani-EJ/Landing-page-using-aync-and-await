const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';


async function getPost() {
    const res = await fetch(url);
    const data = await res.json();
    return data; 
}

async function displayingThe_Posts() {
    const posts = await getPost();
    const cardContainer = document.getElementById('card-container'); 

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'col';

        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${post.name}</h5>
                    <p class="card-text">${post.body}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago by ${post.email}</small>
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

displayingThe_Posts();


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
// getPost2()