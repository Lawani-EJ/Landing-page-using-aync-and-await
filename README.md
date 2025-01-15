# 🎮 Game Builder Website
Hello welcome to the Game Builder website (Prototype) still on development, This platform allows you to design and develop your own games with ease. With powerful tools and an intuitive interface, you can bring your game ideas to life quickly and effortlessly.

## 🌟 Features
1. 🛠️ Create Amazing Games: Use our tools to design and build your own games.
2. 🎨 Intuitive Interface: User-friendly design to help you build games easily.
3. 🌐 Responsive Design: Mobile-first design to ensure your games look great on all devices.
4. 🚀 Fast and Efficient: Quickly bring your game ideas to life.

### 🖥️ Technologies Used In Building This Prototype
1. HTML5: For structuring the content
2. CSS3: For styling the website.
3. Bootstrap 5: For responsive design and prebuilt components.
4. JavaScript: For dynamic content and interactivity.
5. JSONPlaceholder API: For fetching sample data.

## Screenshots and Preview
![image](https://github.com/user-attachments/assets/0b07382f-5ecf-42be-abca-7f751d0f4052)

![image](https://github.com/user-attachments/assets/6b1e26df-8928-407a-b728-996c3da8daff)

### 📜 Code Overview
#### HTML Structure
The website includes a responsive navigation bar, a main header, and multiple sections showcasing different features of the platform. Below is a snippet of the main section:

## JavaScript Functionality
The JavaScript code fetches and displays posts using the JSONPlaceholder API. Here's a sample of the code:

<code>
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

 </code>

# 📄 License
This project is open-source and available under the MIT License.

## Feel free to modify and expand this README file as needed. Enjoy building your games! 🚀🎮





