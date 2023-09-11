FROM node:19.9.0-alpine

COPY . /echoui

RUN npm i pnpm -g
RUN cd /echoui && pnpm i && pnpm build:docs
EXPOSE 3000

CMD ["node", "/echoui/apps/docs/.output/server/index.mjs"]
