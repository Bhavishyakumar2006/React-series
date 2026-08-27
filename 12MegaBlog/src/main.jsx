import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/Store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/HomePage.jsx";
import Login from "./pages/loginPage.jsx";
import Signup from "./pages/signUpPage.jsx";
import AllPosts from "./pages/AllPostsPage.jsx";
import AddPost from "./pages/AddPostPage.jsx";
import EditPost from "./pages/EditPostPage.jsx";
import Post from "./pages/PostPage.jsx";
import { authLayout } from "./components/Index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <authLayout authentication={false}>
            <Login />
          </authLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <authLayout authentication={false}>
            <Signup />
          </authLayout>
        }
      />
      <Route
        path="/all-posts"
        element={
          <authLayout authentication>
            <AllPosts />
          </authLayout>
        }
      />
      <Route
        path="/Add-post"
        element={
          <authLayout authentication>
            <AddPost />
          </authLayout>
        }
      />
      <Route
        path="/edit-post/:slug"
        element={
          <authLayout authentication>
            {""}
            <EditPost />
          </authLayout>
        }
      />
      <Route path="/post/:slug" />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
