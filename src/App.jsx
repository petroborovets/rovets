import "./App.css"
import HomePage from "./pages/home/HomePage.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./pages/about/AboutPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import PostPage from "./pages/post/PostPage.jsx";
import MainPageLayout from "./layouts/MainPageLayout.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPageLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: '/rovets',
                element: <HomePage/>,
            },
            {
                path: '/rovets/about',
                element: <AboutPage/>,
            },
            {
                path: '/rovets/contact',
                element: <ContactPage/>,
            },
            {
                path: '/rovets/post/:postId',
                element: <PostPage/>
            }
            ,
            {
                path: '/rovets/category/:categoryId',
                element: <CategoryPage/>
            }
        ],
    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
