import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Post.css';
import axios from 'axios';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';

function PostComp() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("")

  const navigateToHome = () => {
    navigate('/home');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  useEffect(() => {
    axios.get(`http://10.100.102.11:3001/posts/byId/${id}`).then((response) => {
      const post = response.data;
      post.createdAt = formatDate(post.createdAt);
      setPostObject(post);
    });

    axios.get(`http://10.100.102.11:3001/comments/${id}`).then((response) => {
      const comments = response.data;
      setComments(comments);
    });
  }, [id]);

  const addComment = () => {
    axios.post("http://10.100.102.11:3001/comments", {CommentContent: newComment, PostId: id}).then((response) => {
      const commentToAdd = {CommentContent: newComment}
      setComments([...comments, commentToAdd])
      setNewComment("")
      console.log(newComment)
    })
  }

  return (
    <div className='PostComp'>
      <div className='post-content'>
        <div className='post-title'>
            <div className='title-info'>
              <ChevronRightIcon onClick={navigateToHome} /> 
              <h4>{postObject.title}</h4>
            </div>
            <div className='post-info'>
              <span>{postObject.username}</span>
              <span>{postObject.createdAt}</span>
            </div>
        </div>
        <div className='post-text'>{postObject.PostContent}</div>
          <div className='comment-footer'>
            <div className='comment-section'>
              <input type="text" placeholder="הוסף תגובה..." className="comment-input"  value={newComment} onChange={(event) => {setNewComment(event.target.value)}}/>
              <SendIcon  onClick={addComment}/>
            </div>
            <div className='like-section'>
              <ThumbUpOffAltIcon/>
            </div>
            <div className='reply-section'>
              <ReplyIcon />
            </div>
        </div>
        <div className='post-comments'>
            <div className='comments-title'> <h4>תגובות</h4> </div>
            <div className='comments'>
              {comments.map((comment, key) => {
              return (
                <div key={key} className='comment'>
                    {comment.CommentContent}
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default PostComp;
