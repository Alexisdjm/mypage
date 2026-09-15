FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install
#npm install -g typescript

FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
ARG REACT_APP_API_URL
ARG REACT_APP_SITE_URL=https://alexiswebworks.com
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_SITE_URL=$REACT_APP_SITE_URL

RUN npm run build


FROM nginx:1.23.3 as prod
EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/nginx.conf /etc/nginx/conf.d

CMD [ "nginx","-g", "daemon off;" ]