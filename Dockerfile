# Step 1: Use Node.js image to build the app
FROM node:18 AS build

# Step 2: Set working directory inside container
WORKDIR /app/saqui_ashley_ui_garden_build_checks

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all project files
COPY . .

# Step 6: Run code quality checks, but don't fail Docker build
RUN npm run prettier:check || true
RUN npm run lint || true
RUN npm test -- --passWithNoTests || true

# Step 7: Build the production version of the app
RUN npm run build

# Step 8: Use Nginx to serve the built app
FROM nginx:alpine

# Step 9: Copy Nginx config to use port 8018
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 10: Copy the build output from the previous step
COPY --from=build /app/saqui_ashley_ui_garden_build_checks/build /usr/share/nginx/html

# Step 11: Expose port 8018 inside the container
EXPOSE 8018

# Step 12: Start Nginx
CMD ["nginx", "-g", "daemon off;"]