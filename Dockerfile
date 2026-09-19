# Stage 1: Build the static Quartz files
FROM node:22-slim AS builder
WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
# Generates static HTML/CSS/JS files in the /usr/src/app/public directory
RUN npx quartz build

# Stage 2: Serve static files with lightweight Nginx
FROM nginx:alpine
# Copy the built static files from Stage 1 into Nginx's web root
COPY --from=builder /usr/src/app/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Test webhook