FROM node:latest as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 5173
# Start the app
CMD [ "yarn", "start" ]
