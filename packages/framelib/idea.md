## purpose

Purpose of this package is to run environmental server, manage package bundling / publication / configuration and provide neccessary functions

### running the environmental server

The whole idea of the project is to build and test libraries in the same environment. Simplicity is the main goal, and providing simplicity on the user-side will make application-side more complex. Environment will have similar file system structure:

```
/env
- /assets
- styles.css
- index.tsx
```

This environment will be ignored by the bundler, and handled by the env server. This application is incomplete, it has no package.json, no node_modules or no index.html to make it as minimalistic as possible. index.tsx, and styles.tsx will be imported inside the ready-run react application and will be served on the localhost with additional content inside the /assets. This react application will be placed inside this package, and /assets will be directly copied to the our react application instead of imcom.valvesoftware.Steamporting them. Our server should also listen to the changes inside /env and and /src directories and re-bundle on every change. We could either use a bundler, or run in the ready to use framework/ssg like: Vite or CRA. Alternatives are: SWR and Parcel. Also, compiling could happen via SWR and serving using Vite, using concurrently.

### package manager

Package manager should handle generating publishable packages. It will take /src and /package.json as an input, and generate /packages/{name}-{version}. As I mention earlier, we want to keep everything as minimalistic as possible, so user (developer) will just use typescript inside the application just with entry point (index.ts) for exporting and package.json for configurations. We willn't have seperate configurtion folder but rather use fields from the package.json. Package manager should transpile and bundle the application, generate package.json file, handle versions, scripts for different actions and publishing. If user wants to include other files other then package.json inside their package, they will include them inside the package.json, but we should also support common files such as LICENSE or .gitignore

### library

Idea not complete.
