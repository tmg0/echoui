FROM node:19.9.0-alpine

COPY . /echoui

WORKDIR /echoui
RUN npm i pnpm -g
RUN npm i turbo -D
RUN pnpm i

WORKDIR /echoui/apps/docs
RUN pnpm build
EXPOSE 3000

CMD ["node", "/echoui/apps/docs/.output/server/index.mjs"]
