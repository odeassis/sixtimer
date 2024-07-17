<div align="center">
  <img src="https://res.cloudinary.com/dorzadlpq/image/upload/v1669773822/Github/reactjs/Desktop_-_2_brmra2.png" width=100%/>
</div>

## Overview

This project is a web application built with React and TypeScript, utilizing Tauri for building cross-platform desktop applications. The project structure is organized to separate concerns and maintain modularity.

## Project Structure

- **Root Directory**

  - [`.eslintrc.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2F.eslintrc.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/.eslintrc.json"): ESLint configuration file.
  - [`.gitignore`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/.gitignore"): Specifies files and directories to be ignored by Git.
  - [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/index.html"): The main HTML file.
  - [`package.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/package.json"): Contains project metadata and dependencies.
  - [`README.md`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/README.md"): Project documentation.
  - [`tsconfig.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2Ftsconfig.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/tsconfig.json"): TypeScript configuration file.
  - [`vite.config.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2Fvite.config.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/vite.config.ts"): Vite configuration file.

- **src Directory**

  - `@types/`: Contains TypeScript declaration files.
    - `styled.d.ts`: Type definitions for styled components.
  - `App.tsx`: The main application component.
  - `components/`: Contains reusable UI components.
    - `Header/`: Header component.
      - `index.tsx`: Header component implementation.
      - `styles.ts`: Styles for the Header component.
    - `MessageError/`: Error message component.
      - `index.tsx`: Error message component implementation.
  - `contexts/`: Contains React context providers.
    - `CycleContext.tsx`: Context for managing cycles.
  - `layouts/`: Contains layout components.
    - `DefaultLayout/`: Default layout component.
  - `main.tsx`: Entry point for the React application.
  - `pages/`: Contains page components.
    - `History/`: History page component.
    - `Home/`: Home page component.
  - `reducer/`: Contains Redux reducers.
    - `cycle/`: Reducer for managing cycles.
      - `reducer.ts`: Implementation of the cycle reducer.
  - `Router.tsx`: Application routing configuration.
  - `styles/`: Contains global styles and themes.
    - `global.ts`: Global styles.
    - `theme/`: Theme configuration.
  - `vite-env.d.ts`: Vite environment type definitions.

- **src-tauri Directory**
  - [`.gitignore`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/.gitignore"): Specifies files and directories to be ignored by Git for the Tauri project.
  - `build.rs`: Build script for Tauri.
  - `Cargo.lock`: Cargo lock file for Rust dependencies.
  - `Cargo.toml`: Cargo configuration file for Rust.
  - `icons/`: Contains application icons.
  - [`src/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fodeassis%2Fworkspace%2Fprojects%2Fsixtimer%2Fsrc%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/odeassis/workspace/projects/sixtimer/src/"): Contains Rust source code.
    - `main.rs`: Main entry point for the Tauri application.
  - `tauri.conf.json`: Tauri configuration file.

## Key Features

- **React & TypeScript**: The project is built using React for the frontend and TypeScript for type safety.
- **Tauri**: Utilizes Tauri for building cross-platform desktop applications.
- **Modular Structure**: Organized into components, contexts, layouts, pages, and reducers for maintainability.
- **Styling**: Uses styled components and global styles for consistent theming.
- **Routing**: Configured with a router for navigation between different pages.

## Getting Started

To get started with the project, follow these steps:

1. **Install Dependencies**:

   ```sh
   npm install
   ```

2. **Run the Development Server**:

   ```sh
   npm run dev
   ```

3. **Build the Project**:
   ```sh
   npm run build
   ```

## Contribution

Please refer to the [README.md](README.md) for guidelines on how to contribute to this project.

---

This resume provides a high-level overview of the project structure, key features, and steps to get started.
