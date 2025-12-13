# Hollow Gaze (Working Title)

A 2D atmospheric action game built from the ground up with React, TypeScript, and modern web technologies.

## 📜 About The Game

This project is a 2D side-scrolling game that tells the story of an outsider who accidentally enters the City of Tomorrow, a scientific utopia frozen in time by a catastrophic experiment. To escape, the player must navigate the spectral ruins and confront the soul of the head scientist, Dr. Aris Thorne, who is now fused with the machine that caused the disaster.

The game is built as a Single Page Application (SPA) using React Router to manage different screens like the intro, story sequence, and the main game.

## ✨ Features

*   **State-Driven Animation:** Player and enemy animations are controlled entirely by React state, using CSS spritesheets and keyframe animations.
*   **Interactive Keyboard Controls:** Responsive, real-time controls for player movement (walking) and actions (attacking).
*   **Dynamic Combat System:** A complete combat loop where the player can damage an enemy, track its health, and defeat it, triggering a death animation.
*   **Simple Enemy AI:** The villain operates on a simple timer-based AI, automatically switching between idle and attack states.
*   **Atmospheric Layered Scenery:** The game world is built with multiple CSS layers, using blur effects and `z-index` to create a sense of depth.
*   **Narrative Intro:** A timed, typewriter-effect story sequence to set the mood and introduce the plot.

## 💻 Tech Stack

*   **Framework:** [React](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Styling:** CSS Animations, CSS Modules, and `z-index` for scene layering.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hollow-gaze.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd hollow-gaze
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or the port specified in your terminal).

## 🎮 Controls

*   **Walk Right:** `Right Arrow`
*   **Attack:** `a`

## 🙏 Credits & Attributions

This project was made possible by the generous artists and creators who share their work with the community. A huge thank you to them!

*   **Knight Character Spritesheet:** [Link to the asset's webpage] by [Artist's Name]
*   **Villain (Demon) Spritesheet:** [Link to the asset's webpage] by [Artist's Name]
*   **Ghost GIFs:** [Link to the asset's webpage] by [Artist's Name]
*   **Background Ambiance Audio:** [Link to the asset's webpage] by [Creator's Name]

---

Made by **[Muinashraf]**.