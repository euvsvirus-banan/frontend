#!/usr/bin/env bash
set -o errexit -o pipefail -o nounset

# Complie the .proto files to .js

( cd src/gRPC \
  && protoc -I=. users.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. )

( cd src/gRPC \
  && protoc -I=. requests.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. )

( cd src/gRPC \
  && protoc -I=. news.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. )
