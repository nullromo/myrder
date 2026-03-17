# use node image to build the frontend
FROM node:24 AS builder
WORKDIR /myrder
COPY package*.json /myrder
RUN npm install-clean
COPY . /myrder
RUN npm run build

# primary function is to serve the frontend application
FROM ubuntu/nginx

# install dependencies from apt
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y \
    vim \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# set working directory
WORKDIR /myrder

# copy and install files
COPY --from=builder /myrder/build /myrder/build
COPY --from=builder /myrder/default.nginx /etc/nginx/sites-available/default
RUN chmod 644 /etc/nginx/sites-available/default

# run nginx
CMD ["nginx", "-g", "daemon off;"]
