FROM ubuntu:18.04
# Create app directory
RUN mkdir -p /app

WORKDIR /app



RUN \
    apt-get update && \
    apt-get clean && \
    apt-get install -y curl build-essential libfontconfig ffmpeg

RUN ln -s /usr/lib/x86_64-linux-musl/libc.so /lib/libc.musl-x86_64.so.1


# Install node
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install nodejs -y

RUN npm install -g pm2

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app