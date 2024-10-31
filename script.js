function likeImage(button) {
    const likesSpan = button.nextElementSibling;
    let likesCount = parseInt(likesSpan.textContent);
    likesCount++;
    likesSpan.textContent = `${likesCount} Likes`;
}

function submitComment(button) {
    const comment = button.previousElementSibling.value;
    alert(`Comment submitted: ${comment}`);
    button.previousElementSibling.value = ""; // Clear the textarea
}

// Function to toggle like
function toggleLike(button) {
    const galleryItem = button.parentElement; // Get the parent gallery item
    const likeStatus = galleryItem.querySelector('.like-status'); // Get the like status text
    const imageId = galleryItem.querySelector('img').alt; // Use image alt as a unique ID

    // Get current likes from local storage or default to 0
    let likes = JSON.parse(localStorage.getItem(imageId)) || 0;

    // Toggle like status
    if (button.classList.contains('liked')) {
        likes--; // Decrement if already liked
        button.classList.remove('liked'); // Remove liked class
    } else {
        likes++; // Increment if not liked
        button.classList.add('liked'); // Add liked class
    }

    // Save the new like count to local storage
    localStorage.setItem(imageId, JSON.stringify(likes));
    
    // Update like status display
    likeStatus.textContent = `${likes} Likes`;
}

// Function to add a comment
function addComment(button) {
    const textarea = button.previousElementSibling; // Get the textarea
    const commentText = textarea.value.trim(); // Get the comment text
    if (commentText) {
        const commentSection = button.nextElementSibling; // Get the comments section
        const commentDiv = document.createElement('div'); // Create a new comment div
        commentDiv.classList.add('comment');

        // Create a delete button for the comment
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            commentSection.removeChild(commentDiv); // Remove the comment
            saveComments(commentSection); // Save updated comments
        };

        // Add the text and delete button to the comment div
        commentDiv.textContent = commentText;
        commentDiv.appendChild(deleteButton);

        // Add the comment div to the comments section
        commentSection.appendChild(commentDiv);
        textarea.value = ''; // Clear the textarea

        saveComments(commentSection); // Save comments
    } else {
        alert('Please enter a comment.');
    }
}

// Function to save comments to local storage
function saveComments(commentSection) {
    const comments = [];
    const commentDivs = commentSection.querySelectorAll('.comment');
    commentDivs.forEach(commentDiv => {
        comments.push(commentDiv.textContent.replace('Delete', '').trim()); // Remove buttons text
    });
    const imageId = commentSection.parentElement.querySelector('img').alt; // Get the image ID
    localStorage.setItem(`comments-${imageId}`, JSON.stringify(comments)); // Save comments
}

// Function to load comments from local storage
function loadComments(commentSection) {
    const imageId = commentSection.parentElement.querySelector('img').alt; // Get the image ID
    const savedComments = JSON.parse(localStorage.getItem(`comments-${imageId}`)) || [];
    savedComments.forEach(commentText => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;

        // Create delete button for the loaded comment
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            commentSection.removeChild(commentDiv);
            saveComments(commentSection); // Save updated comments
        };

        commentDiv.appendChild(deleteButton);
        commentSection.appendChild(commentDiv);
    });
}

// Load likes and comments on page load
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery div');
    galleryItems.forEach(item => {
        const imageId = item.querySelector('img').alt; // Get image ID

        // Load and display likes
        const likes = JSON.parse(localStorage.getItem(imageId)) || 0; // Get saved likes
        item.querySelector('.like-status').textContent = `${likes} Likes`; // Display likes
        if (likes > 0) {
            item.querySelector('.like-button').classList.add('liked'); // Mark as liked
        }
        // Function to toggle like
function toggleLike(button) {
    const galleryItem = button.parentElement; // Get the parent gallery item
    const likeStatus = galleryItem.querySelector('.like-status'); // Get the like status text
    const imageId = galleryItem.querySelector('img').alt; // Use image alt as a unique ID

    // Get current likes from local storage or default to 0
    let likes = JSON.parse(localStorage.getItem(imageId)) || 0;

    // Toggle like status
    if (button.classList.contains('liked')) {
        likes--; // Decrement if already liked
        button.classList.remove('liked'); // Remove liked class
    } else {
        likes++; // Increment if not liked
        button.classList.add('liked'); // Add liked class
    }

    // Save the new like count to local storage
    localStorage.setItem(imageId, JSON.stringify(likes));
    
    // Update like status display
    likeStatus.textContent = `${likes} Likes`;
}

// Function to add a comment
function addComment(button) {
    const textarea = button.previousElementSibling; // Get the textarea
    const commentText = textarea.value.trim(); // Get the comment text
    if (commentText) {
        const commentSection = button.nextElementSibling; // Get the comments section
        const commentDiv = document.createElement('div'); // Create a new comment div
        commentDiv.classList.add('comment');

        // Create a delete button for the comment
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            commentSection.removeChild(commentDiv); // Remove the comment
            saveComments(commentSection); // Save updated comments
        };

        // Add the text and delete button to the comment div
        commentDiv.textContent = commentText;
        commentDiv.appendChild(deleteButton);

        // Add the comment div to the comments section
        commentSection.appendChild(commentDiv);
        textarea.value = ''; // Clear the textarea

        saveComments(commentSection); // Save comments
    } else {
        alert('Please enter a comment.');
    }
}

// Function to save comments to local storage
function saveComments(commentSection) {
    const comments = [];
    const commentDivs = commentSection.querySelectorAll('.comment');
    commentDivs.forEach(commentDiv => {
        comments.push(commentDiv.textContent.replace('Delete', '').trim()); // Remove buttons text
    });
    const imageId = commentSection.parentElement.querySelector('img').alt; // Get the image ID
    localStorage.setItem(`comments-${imageId}`, JSON.stringify(comments)); // Save comments
}

// Function to load comments from local storage
function loadComments(commentSection) {
    const imageId = commentSection.parentElement.querySelector('img').alt; // Get the image ID
    const savedComments = JSON.parse(localStorage.getItem(`comments-${imageId}`)) || [];
    savedComments.forEach(commentText => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;

        // Create delete button for the loaded comment
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            commentSection.removeChild(commentDiv);
            saveComments(commentSection); // Save updated comments
        };

        commentDiv.appendChild(deleteButton);
        commentSection.appendChild(commentDiv);
    });
}

// Load likes and comments on page load
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery div');
    galleryItems.forEach(item => {
        const imageId = item.querySelector('img').alt; // Get image ID

        // Load and display likes
        const likes = JSON.parse(localStorage.getItem(imageId)) || 0; // Get saved likes
        item.querySelector('.like-status').textContent = `${likes} Likes`; // Display likes
        if (likes > 0) {
            item.querySelector('.like-button').classList.add('liked'); // Mark as liked
        }

        // Load and display comments
        const commentSection = item.querySelector('.comments-section');
        loadComments(commentSection);
    });
});


        // Load and display comments
        const commentSection = item.querySelector('.comments-section');
        loadComments(commentSection);
    });
});
