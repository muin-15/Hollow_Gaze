// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import Starting from './starting.tsx'; // <-- Import your new Game component
import Game from './game.tsx'; // <-- Import your new Game component
import './index.css'

// 1. Define your routes (the "pages" of your app)
const router = createBrowserRouter([
  {
    path: "/",          // The homepage URL
    element: <App />,   // Show the App component (your intro screen)
  },
  {
    path: "/starting",      // The URL for the game screen
    element: <Starting />,  // Show the Game component
  },
  {
    path: "/game",      // The URL for the game screen
    element: <Game />,  // Show the Game component
  }
]);

// 2. Tell React to use the router
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)