FROM node:12.18.3

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .

EXPOSE 9000

CMD ["npm", "start"]