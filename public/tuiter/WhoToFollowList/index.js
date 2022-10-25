
import WhoToFollowList from "./WhoToFollowList.js";

function testComponent() {
    $('#wd-explore').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
        ${WhoToFollowList()}
  </div>
   `);
}
$(testComponent);