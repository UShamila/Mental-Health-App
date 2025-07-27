# Use official Nginx image
FROM nginx:alpine

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files to the Nginx web root
COPY . /usr/share/nginx/html

# Expose web port
EXPOSE 80
