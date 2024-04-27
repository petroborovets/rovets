# Pe.Bo.Blog

Blog website written using React working in Vite with HMR and some ESLint rules. <br />
Was created using `npm create vite@latest peboblog -- --template react`

### Pre-requirements:
1. Install homebrew by running: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`.
2. Install nvm, check doc: https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script.
3. Install node v20 by running: `nvm install 20`, check version by running `nvm --version`. I am running `v20.12.2`.
4. Check npm version by running `npm --version`, I am running `10.5.0`.

### To start in dev mode run:
`npm install`
`npm run dev`

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
