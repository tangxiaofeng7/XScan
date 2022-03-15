FROM nginx:1.15.3-alpine as production-stage

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./dist /usr/share/nginx/html

EXPOSE 8001

CMD ["nginx", "-g", "daemon off;"]
