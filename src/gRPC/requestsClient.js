const { RequestsRPCClient } = require("./requests_grpc_web_pb");
const {} = require("./requests_pb");

const envoyURI = "http://localhost:8080";

const client = new RequestsRPCClient(envoyURI);

const createRequest = (requestSpec) => {
  const {} = userSpec;

  const helpRequest = new Request();

  return helpRequest;
};

const addUser = (requestSpec) => {
  const helpRequest = new AddRequestRequest();

  helpRequest.setRequest(createRequest(requestSpec));

  client.addUser(request, {}, (error, response) => {
    if (error) {
      console.error(error);
      throw new Error("gRPC request failed");
    }
    const [userId] = response.array;
    console.log(userId);
  });
};

const userClient = {
  addUser,
};

export default userClient;
