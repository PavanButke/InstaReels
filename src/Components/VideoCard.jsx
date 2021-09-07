import { useState } from "react";
import "./VideoCard.css";

let VideoCard =()=>
{
    let [playing , setPlaying]= useState(false);
    let [commentBoxOpen , setCommentBoxOpen] = useState()

    return(
        <div className="video-card">
        <p className="video-card-username">New User</p>
        <span className="video-card-music">
            <span class="fas fa-music " ></span> 
            <marquee>some song</marquee>
        </span>
        <span 
            onClick={(e) =>{
                if( commentBoxOpen)
                {
                    setCommentBoxOpen(false);
                }
                else{
                    setCommentBoxOpen(true);
                }
            }}
        
        class="material-icons-outlined video-card-comment">chat</span>
        <span  class="far fa-heart video-card-like">
        </span>

        {commentBoxOpen ? (
        <div className="video-card-comment-box">
          <div className="actual-comments">
            <div className="post-user-comment">
              <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/118013870/original/a29845d9480549408ae15751b2125f2a260236b7/make-your-linkedin-or-facebook-profile-picture-beautiful.jpg" />
              <div>
                <h6>@username</h6>
                <p>This is actual comment</p>
              </div>
            </div>
            <div className="post-user-comment">
              <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <div>
                <h6>@username</h6>
                <p>This is actual comment</p>
              </div>
            </div>
          </div>
          <div className="comment-form">
            <input type="text" />
            <button>Post</button>
          </div>
        </div>
      ) : (
        ""
      )}

        <video
            onClick={(e)=>{
                if(playing) {
                    e.currentTarget.pause();
                    setPlaying(false);
                } else {
                    e.currentTarget.play();
                    setPlaying(true);
                }


               }

            }
            loop
            src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
            className="video-card-video"
        ></video>
        </div>
        
    )
}
export default VideoCard;