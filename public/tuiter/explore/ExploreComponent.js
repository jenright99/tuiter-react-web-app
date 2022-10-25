import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="input-group wd-search-bar">
            <input class="form-control wd-search-offset" placeholder="Search" />
            <i class="fa fa-magnifying-glass wd-search-icon"></i>
            <i class="fa-solid fa-gear fa-2x" style="color:blue"></i>
        </div>

        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="card">
            <img src="../../images/spacexstarship.jpg"
                 class="card-img-top" alt="...">
            ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;
