import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { NotFound } from "./components/NotFound";
import { Categories } from "./components/Categories";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { Anime } from "./components/Anime";
import { Manga } from "./components/Manga";
import { MangaPage } from "./components/MangaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  { path: "/categories", element: <Categories /> },
  { path: "/anime", element: <Anime /> },
  { path: "/manga", element: <Manga /> },
  { path: "/manga/:id", element: <MangaPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
