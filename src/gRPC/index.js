const { UsersRPCClient } = require("./service_grpc_web_pb");

const envoyURI = "http://localhost:8080";

const client = new UsersRPCClient(envoyURI);

const fooRequest = () => {
  // Make some request here
};

export default fooRequest;
