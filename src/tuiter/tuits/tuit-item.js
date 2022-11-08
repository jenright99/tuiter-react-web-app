import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
import TuitStats from "./tuit-stats.js";

const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "javascript.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img alt="" width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                </div>
                <div className="col-10">
                    <div><span className="fw-bolder">{post.userName}</span> {post.handle} . {post.time}</div>
                    <div>{post.tuit}</div>
                </div>
                <TuitStats
                    key = {post.id} post={post}/>
            </div>

        </li>
    );
};
export default TuitItem;