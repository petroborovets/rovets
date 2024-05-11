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
                path: '/about',
                element: <AboutPage/>,
            },
            {
                path: '/contact',
                element: <ContactPage/>,
            },
            {
                path: '/post/:id',
                element: <PostPage/>
            }
            ,
            {
                path: '/category/:id',
                element: <CategoryPage/>
            }
        ],
    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
