# ---- Build stage ----
FROM node:18-alpine AS build
WORKDIR /laki_cini_final_site
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY public ./public
COPY src ./src
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine
# set working dir per requirement
WORKDIR /laki_cini_final_site
# put the built site *inside the working dir*, not /usr/share/nginx/html
COPY --from=build /laki_cini_final_site/build /laki_cini_final_site/site
# nginx will serve from the working dir path
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]
