import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const TuitStats = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    let style = {color: "black"}
    if (post.liked) {
        style = {color: "red"}
    }

    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <i className="bi bi-chat"> {post.replies}</i>
            </div>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <i className="bi bi-recycle"> {post.retuits}</i>
            </div>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <i className="bi bi-heart" style={style}> {post.likes}</i>
            </div>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default TuitStats;