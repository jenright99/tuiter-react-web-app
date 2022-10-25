const WhoToFollowListItem = (who) => {
    return(`
   <li class="list-group-item">
                <div class="row">
                <div class="col-4">
                    <img src=${who.avatarIcon} class="wd-follow-image"/>
                </div>
                <div class="col-4">
                    <p style="white-space: nowrap"><b>${who.userName}</b> <i class="fa fa-check-circle"></i></p>
                    <p class="wd-topic-text">${who.handle}</p>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary wd-follow-button" href="#">
                        Follow
                    </button>
                </div>
                </div>
            </li>
 `);
}
export default WhoToFollowListItem;