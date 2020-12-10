FROM fholzer/nginx-brotli

ENV VIRTUAL_HOST="viewyjs.org"
ENV LETSENCRYPT_HOST="viewyjs.org"

RUN rm /etc/nginx/conf.d/default.conf

COPY ./doc /usr/share/nginx/html

COPY nginx_config /etc/nginx/conf.d/
