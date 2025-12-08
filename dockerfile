FROM node:iron-alpine3.22 AS base

#Define build arguments for enviroment variables
ARG VITE_DEVELOPMENT_URL

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:1-alpine-slim AS production
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80 
CMD [ "nginx","-g","daemon off;" ]