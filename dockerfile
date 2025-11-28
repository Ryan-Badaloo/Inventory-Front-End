FROM node:alpine3.24 AS base

#Define build arguments for enviroment variables
ARG VITE_DEV_URL

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:mainline-alpine3.22 AS production
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]