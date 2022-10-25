
import exploreItems from "./exploreItems.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

const PostSummaryList = () => {
    let total = "";
    for (let i = 0; i < exploreItems.length; i++) {
        total += PostSummaryListItem(exploreItems[i]);

    }
    return (`
           <ul class="list-group list-group-flush">
                ${total};
            </ul>
`); }
export default PostSummaryList;