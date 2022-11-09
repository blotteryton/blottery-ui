FROM node:18-alpine as build
ENV REACT_APP_BLOTTERY_API https://admin-blottery.teegra.io/api/v1/
WORKDIR /app
COPY package.json /app/package.json
RUN yarn install
COPY . /app
RUN yarn build

FROM nginx:1.16.0-alpine
ENV REACT_APP_BLOTTERY_API https://admin-blottery.teegra.io/api/v1/
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
