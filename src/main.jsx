import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import {AddPost, Signup, Login, EditPost} from './pages/index.js'
import PostSkeleton from './pages/PageSkeletons/PostSkeleton.jsx'
import PostCardSkeleton from './pages/PageSkeletons/PostCardSkeleton.jsx'
import HomeSkeleton from './pages/PageSkeletons/HomeSkeleton.jsx'

const Post = lazy(() => import('./pages/Post'))
const AllPosts = lazy(() => import('./pages/AllPosts.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Suspense fallback={<HomeSkeleton/>}>
                <Home />
            </Suspense>,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Suspense fallback={<PostCardSkeleton/>}>
                        <AllPosts />
                    </Suspense>
                </AuthLayout>
            ),
        },
        {
            path: "/add-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Suspense fallback={<PostSkeleton />}>
                <Post />
            </Suspense>,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
