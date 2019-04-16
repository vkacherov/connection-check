FROM stefanscherer/node-windows
ENV PORT 8080
EXPOSE 8080

RUN mkdir \connection-check
WORKDIR /connection-check

COPY package.json .
RUN npm install
COPY . .

CMD ["npm.cmd", "start"]
