import "./App.css"
import HomePage from "./pages/home/HomePage.jsx"
import {createHashRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./pages/about/AboutPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import PostPage from "./pages/post/PostPage.jsx";
import MainPageLayout from "./layouts/MainPageLayout.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";

const router = createHashRouter([
    {
        path: '/',
        element: <MainPageLayout/>,
        children: [
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
                path: '/rovets/post/:id',
                element: <PostPage/>
            }
            ,
            {
                path: '/rovets/category/:id',
                element: <CategoryPage/>
            }
        ],
    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
