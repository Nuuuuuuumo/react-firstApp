import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Post } from "./Post";
import "../styles/App.css";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не надены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
