FROM nginx
COPY apps/docs/.output/public /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 5174
