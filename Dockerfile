FROM node:12

ARG PROTOBUF_VERSION=3.11.4

RUN apt-get update \
  && apt-get -y install unzip
RUN curl -L -o protobuf.zip https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protoc-${PROTOBUF_VERSION}-linux-x86_64.zip \
  && unzip protobuf.zip -d /usr/local \
  && rm protobuf.zip \
  && protoc --version

RUN curl -L -o /bin/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64 \
  && chmod +x /bin/protoc-gen-grpc-web 

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install --quiet

COPY . .

WORKDIR /usr/src/app

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]

