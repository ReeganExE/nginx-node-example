FROM node:12-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code to the image
COPY index.js ./

CMD ["node", "index.js"]