// comments.js

function submitComment() {
    var comment = document.getElementById('comment').value;

    // You can add your logic to handle comments here (e.g., store them, display them, etc.)

    // Display a simple alert for demonstration purposes
    alert('Comment submitted:\n' + comment);

    // Clear the textarea
    document.getElementById('comment').value = '';

    // Update the comments section (optional)
    updateCommentsSection(comment);
}

function updateCommentsSection(comment) {
    var commentsSection = document.getElementById('commentsSection');
    var newComment = document.createElement('p');
    newComment.textContent = comment;
    commentsSection.appendChild(newComment);
}
