FROM node:19.9.0-alpine
COPY apps/docs/.output /.output
EXPOSE 3000
CMD ["node", "/.output/server/index.mjs"]
