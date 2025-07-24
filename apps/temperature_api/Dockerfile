FROM node:20-alpine AS builder
WORKDIR /usr/src/app/temperature_service
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /usr/src/app/temperature_service
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /usr/src/app/temperature_service/dist ./dist
EXPOSE ${TEMPERATURE_API_PORT}
CMD ["node", "dist/src/index.js"]