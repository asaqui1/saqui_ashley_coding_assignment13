
## Coding Assignment 13 Dockerfile**

```dockerfile
# Step 1: Use Node.js image to build the app
FROM node:18 AS build

# Step 2: Set working directory inside container
WORKDIR /app/lastname_firstname_ui_garden_build_checks

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files
COPY . .

# Step 6: Build the production version of the app
RUN npm run build

# Step 7: Use Nginx to serve the built app
FROM nginx:alpine

# Step 8: Copy the build output from the previous step
COPY --from=build /app/lastname_firstname_ui_garden_build_checks/build /usr/share/nginx/html

# Step 9: Expose port 80 inside the container
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]