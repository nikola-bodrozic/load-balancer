FROM nginx:1.20.0-alpine-perl

# get the latest security upgrades and bugfixes
RUN apk -U upgrade

COPY nginx.conf /etc/nginx/nginx.conf
