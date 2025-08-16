# ---- Build stage ----
FROM node:18-alpine AS build
WORKDIR /Laki_Cini_final_site
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY public ./public
COPY src ./src
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine
WORKDIR /Laki_Cini_final_site
COPY --from=build /Laki_Cini_final_site/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]
