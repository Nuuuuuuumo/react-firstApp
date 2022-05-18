import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import '../styles/App.css'

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading ] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{margin: "30px 0 40px "}}>
            <div>
              <h2>{post.id}. {post.title}</h2>
            </div>
            <div>
              {post.body}
            </div>
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
