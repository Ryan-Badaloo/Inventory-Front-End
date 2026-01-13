# front-end

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Docker setup
Build Docker image command 
```sh
 docker build --build-arg VITE_DEVELOPMENT_URL=/cinv-api/ -t ictdev2025/computerinventoryforntend:image-tag-latest .
```

Push Docker Image
```sh 
  docker push ictdev2025/computerinventoryforntend:image-tag-latest
```