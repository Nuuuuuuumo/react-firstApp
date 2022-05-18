import React from "react";
import styles from "./Post.module.css";
import MyButton from "./UI/myButton/MyButton";
import { useNavigate } from "react-router-dom";

export const Post = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.Post}>
      <div>
        <h1>
          {props.post.id}. {props.post.title}
        </h1>
        <p>{props.post.body}</p>
      </div>
      <div className={styles.post__btns}>
        <MyButton onClick={() => props.remove(props.post)}>
          Удалить пост
        </MyButton>
        <MyButton
          onClick={() => navigate(`/posts/${props.post.id}`)}
          style={{ marginLeft: "2px" }}
        >
          Открыть
        </MyButton>
      </div>
    </div>
  );
};
