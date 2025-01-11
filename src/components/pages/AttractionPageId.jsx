    import React, { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import PostService  from '../API/PostService';
    import { useFetching } from '../hooks/useFetching'; 
    import NotFoundPage from './NotFoundPage/notFoundPage'

    const AttractionPageId = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id); 
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, []); 

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <NotFoundPage /> ;
    }

    return (
        <>
        <h1>Вы открыли страницу поста с ID = {params.id}</h1>
        {isLoading
            ? <isLoading/>
            : <div className="block_attraction"> <h2>{post.name}</h2> <h3>{post.description}</h3></div>
            
        }
        
        
        </>
    );
    };

    export default AttractionPageId;