//  how to display the comment in a form that pulls up vs just doing it from the main page.

const editCommentForms = document.querySelectorAll('.editCommentForm')
const comments = document.querySelectorAll('.commentContent')
const openEditForms = document.querySelectorAll('.openEditForm')

openEditForms.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (editCommentForms[index].style.display == 'none') {
            editCommentForms[index].style.display = 'block'
            comments[index].style.display = 'none'
            button.innerHTML = 'Cancel'
        } else {
            editCommentForms[index].style.display = 'none'
            comments[index].style.display = 'inline-block'
            button.innerHTML = 'Edit'
        }
    })
})
