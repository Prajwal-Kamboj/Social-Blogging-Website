FROM node:alpine
WORKDIR /app
# copy from build image
COPY  ./package.json ./package.json
COPY  ./node_modules ./node_modules
COPY  ./.next ./.next
COPY  ./public ./public
EXPOSE 8080
CMD ["npm","run", "start:prod"]
