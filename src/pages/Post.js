import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLikedPosts } from '../contexts/LikedPostsContext'; // Import the custom hook from the context
import '../styles/Post.css';
import axios from 'axios';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';

function PostComp() {
  let { id } = useParams();
  const { likedPosts, toggleLike } = useLikedPosts(); // Use the context to get liked posts and the function to toggle likes
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  const LikeAPost = () => {
    // Toggle liked state optimistically based on current state in the context
    const currentlyLiked = likedPosts[id] || false;
    axios.post(`http://10.100.102.7:3001/likes`, 
      { PostId: id }, 
      { headers: { accessToken: sessionStorage.getItem('accessToken') } }
    ).then((response) => {
      toggleLike(id, response.data.liked); // Update the liked state in the context
    }).catch(error => {
      console.error("There was an error liking the post:", error);
      // Revert back to original state in case of an error
      toggleLike(id, currentlyLiked);
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    axios.get(`http://10.100.102.7:3001/posts/byId/${id}`, {
      headers: { accessToken: sessionStorage.getItem('accessToken') }
    }).then((response) => {
      const post = response.data;
      post.createdAt = formatDate(post.createdAt);
      setPostObject(post);
    }).catch(error => {
      console.error("There was an error fetching the post:", error);
    });

    axios.get(`http://10.100.102.7:3001/comments/${id}`, {
      headers: { accessToken: sessionStorage.getItem('accessToken') }
    }).then((response) => {
      const comments = response.data.map(comment => ({
        ...comment,
        createdAt: formatDate(comment.createdAt),
      }));
      setComments(comments);
    }).catch(error => {
      console.error("There was an error fetching the comments:", error);
    });
  }, [id]); // Depend on id to re-run these calls when it changes

  const addComment = () => {
    axios.post("http://10.100.102.7:3001/comments", 
      { CommentContent: newComment, PostId: id },
      { headers: { accessToken: sessionStorage.getItem("accessToken") } }
    ).then((response) => {
      if (!response.data.error) {
        const commentToAdd = {
          CommentContent: newComment,
          username: response.data.username,
          createdAt: formatDate(new Date().toISOString())
        };
        setComments([...comments, commentToAdd]);
        setNewComment("");
      }
    }).catch(error => {
      console.error("There was an error adding the comment:", error);
    });
  };

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
            <input type="text" placeholder="הוסף תגובה..." className="comment-input" value={newComment} onChange={(event) => setNewComment(event.target.value)} />
            <SendIcon onClick={addComment} />
          </div>
          <div className={`like-section ${likedPosts[id] ? 'liked' : ''}`}>
            <ThumbUpIcon onClick={LikeAPost} />
          </div>
          <div className='reply-section'>
            <ReplyIcon />
          </div>
        </div>
        <div className='post-comments'>
          <div className='comments-title'><h4>תגובות</h4></div>
          <div className='comments'>
            {comments.map((comment, key) => (
              <div key={key} className='comment'>
                <div className='comment-content'>{comment.CommentContent}</div>
                <div className='comment-info'>
                  <span className='comment-username'>{comment.username}</span>
                  <span className='comment-date'>{comment.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostComp;
