const NavigationSidebar = () => {
    return(`
   <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter"></i> </a>
            <a href="../home.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-house"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">Home</span></a>
            <a href="#" class="list-group-item list-group-item-action active">
                <i class="fa-solid fa-hashtag"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">Explore</span></a>
            <a href="../notifications.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bell"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">Notifications</span></a>
            <a href="../messages.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-envelope"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">Messages</span></a>
            <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-bookmark"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">Bookmarks</span></a>
            <a href="../lists.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-list"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">Lists</span></a>
            <a href="../profile.html" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-person"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">Profile</span></a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-solid fa-ellipsis"></i> <span class="d-xxl-block d-xl-block d-lg-none d-sm-none d-none">More</span></a>
        </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;