FROM node:19.9.0-alpine
COPY apps/docs /docs

WORKDIR /docs
RUN npm install && npm run build

EXPOSE 3000
CMD ["node", "/docs/.output/server/index.mjs"]
