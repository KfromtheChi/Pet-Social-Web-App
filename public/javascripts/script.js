//  how to display the comment in a form that pulls up vs just doing it from the main page.

const editCommentForm = document.getElementById('editCommentForm')
const commentContent = document.getElementById('commentContent')
const openEditForm = document.getElementById('openEditForm')

openEditForm.addEventListener('click', () => {
    if (editCommentForm.style.display == 'none') {
        editCommentForm.style.display = 'block'
        commentContent.style.display = 'none'
    }
})