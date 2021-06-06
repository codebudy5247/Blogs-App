import React from 'react'
import moment from 'moment'
import Avatar from "../Avatar"
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const PostHeader = ({post}) => {
    return (
        <>
        <div className="card_header">
        <div className="d-flex">
            <Avatar
             src={post.user.avatar} 
             size="big-avatar" />

            <div className="card_name">
                <h6 className="m-0">
                {post.user.name}
                </h6>
                <big >
                    {moment(post.createdAt).fromNow()}
                </big>
            </div>
        </div>

        <div className="nav-item dropdown">
            <span id="moreLink" data-toggle="dropdown">
             <MoreHorizOutlinedIcon />
            </span>

            <div className="dropdown-menu">
               
                    <>
                        <div className="dropdown-item">
                            <span className="material-icons">create</span> Edit Post
                        </div>
                        <div className="dropdown-item">
                            <span className="material-icons">delete_outline</span> Remove Post
                        </div>
                    </>
                

                <div className="dropdown-item">
                    <span className="material-icons">content_copy</span> Copy Link
                </div>
            </div>
        </div>
    </div>  
        </>
    )
}

export default PostHeader
