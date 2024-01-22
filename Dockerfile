FROM php:8.0-apache as base

WORKDIR /var/www/html

COPY . .

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli