import React, { useState, useEffect } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/myModal/MyModal";
import MyButton from "../components/UI/myButton/MyButton";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  return (
    <div>
      <MyButton style={{ marginTop: "15px" }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <div className="App">
        <hr style={{ margin: "10px 0" }}></hr>
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>Произошла ошибка ${postError}</h1>}
        {isPostsLoading ? (
          <Loader />
        ) : (
          <PostList
            remove={removePost}
            posts={sortedAndSearchPosts}
            title={`Страница ${page}`}
          />
        )}
      </div>
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
