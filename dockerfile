FROM node:alpine3.22 AS base
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
WORKDIR /app
COPY package*.json ./
# COPY .env ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.26-alpine-slim AS production
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]