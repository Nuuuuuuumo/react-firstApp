import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Quiz from "../pages/Quiz";
import Login from '../pages/Login'

export const privateRoutes = [
    {path: '/home', element: <Home />, exact: true},
    {path: '/posts', element: <Posts />, exact: true},
    {path: '/posts/:id', element: <PostIdPage />, exact: true},
    {path: '/home', element: <Home />, exact: true},
    {path: '/quiz', element: <Quiz />, exact: true},
    {path: '/', element: <Home />, exact: true},
    {path: '/*', element: <NotFoundPage />, exact: true}
]
export const publicRoutes = [
    {path: '/login', element: <Login />, exact: true}
]
