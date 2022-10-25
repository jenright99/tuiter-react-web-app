import WhoToFollowListItem from "./WhoToFollowListItem.js";
import Who from "./who.js";
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
            <li><h3>Who to follow</h3></li>
            ${WhoToFollowListItem(Who[0])}
            ${WhoToFollowListItem(Who[1])}
            ${WhoToFollowListItem(Who[2])}
            ${WhoToFollowListItem(Who[3])}
            ${WhoToFollowListItem(Who[4])}
            </ul>
`); }
export default WhoToFollowList;