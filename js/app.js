let addCommentBtn = document.getElementById('addCommentBtn')

class Comment {
    constructor(commentName, commentMail, commentComment) {
        this.commentName = commentName;
        this.commentMail = commentMail;
        this.commentComment = commentComment;
    }
}

class UI {

    addToComment(comment) {
        let commentBox = document.getElementById('commentBox')
        commentBox.innerHTML +=
            `
        <div class="user-comment mt-3">
        <div class="d-flex align-items-center">
          <div class="avatar rounded-circle me-2"></div>
          <div class="name">${comment.commentName}</div>
        </div>
        <p class="text-secondary ps-5">
        ${comment.commentComment}
        </p>
      </div>
        `
    }

}





addCommentBtn.addEventListener("click", function () {

    let commentName = document.getElementById('commentName').value
    let commentMail = document.getElementById('commentMail').value
    let commentComment = document.getElementById('commentComment').value

    let comment = new Comment(commentName, commentMail, commentComment)
    let ui = new UI
    ui.addToComment(comment)

})