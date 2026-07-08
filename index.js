// Write your code here!
// Function to display posts in the DOM
function displayPosts(posts) {
    const postList = document.getElementById('post-list');

    posts.forEach(post => {
        // Create elements
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        // Set content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to ul
        postList.appendChild(li);
    });
}

// Async function to fetch data
async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        displayPosts(posts);
        //return posts; // Return posts for testing purposes
    } catch (error) {
        console.error('Could not fetch posts:', error);
    }
}


// Execute the function
if (typeof module === 'undefined') {
   fetchAndDisplayPosts();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { displayPosts, fetchAndDisplayPosts };
} //else {
    // Only call the function automatically if NOT in a test environment
    //fetchAndDisplayPosts();
//}



module.exports = { displayPosts, fetchAndDisplayPosts };