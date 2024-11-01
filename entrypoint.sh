#!/bin/sh

# Replace placeholders in env.js with actual environment variables
envsubst < /usr/share/nginx/html/env.js > /usr/share/nginx/html/env.js

# Start NGINX
nginx -g 'daemon off;'
