const PostSummaryListItem = (post) => {
    return(`
   <li class="list-group-item">
                    <div class="wd-post-box wd-page-padding wd-author-post">
                        <img src=${post.image} class="wd-post-image"/>
                        <p class="wd-topic-text">${post.topic}</p>
                        <p><b>${post.userName}</b> <i class="fa fa-check-circle"></i> <span class="wd-topic-text"> - ${post.time}</span></p>
                        <p><b>${post.title}</b></p>
                    </div>
                </li>
 `);
}
export default PostSummaryListItem;