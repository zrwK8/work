FROM node:latest
RUN npm install -g pnpm
RUN mkdir -p /var/www/vacancies
WORKDIR /var/www/vacancies
ADD . /var/www/vacancies
RUN pnpm install
CMD pnpm build && pnpm start:prod