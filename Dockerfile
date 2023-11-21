FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json
COPY apollo-client.ts ./apollo-client.ts
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY .env.local ./.env.local
COPY src ./src
COPY public ./public


CMD ["yarn", "dev"]

