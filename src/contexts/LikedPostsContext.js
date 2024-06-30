import React, { createContext, useContext, useState } from 'react';

const LikedPostsContext = createContext();

export const useLikedPosts = () => useContext(LikedPostsContext);

export const LikedPostsProvider = ({ children }) => {
    const [likedPosts, setLikedPosts] = useState({});  
    const toggleLike = (postId, status) => {
        setLikedPosts(prev => ({
            ...prev,
            [postId]: status
        }));
    };

    return (
        <LikedPostsContext.Provider value={{ likedPosts, toggleLike }}>
            {children}
        </LikedPostsContext.Provider>
    );
};
