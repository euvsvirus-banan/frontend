const { AddUserRequest, User } = require("./users_pb");
const { UsersRPCClient } = require("./users_grpc_web_pb");

const envoyURI = "http://localhost:8080";

const client = new UsersRPCClient(envoyURI);

const createUser = (userSpec) => {
  const {
    name,
    address: { address, city, country, postcode },
    contact: { email },
  } = userSpec;

  const user = new User();
  const userAddress = new User.Address();

  user.setName(name);

  // Address fields
  userAddress.setAddress(address);
  userAddress.setCity(city);
  userAddress.setCountry(country);
  userAddress.setPostcode(postcode);

  user.setAddress(userAddress);

  // Contact details
  const userEmail = new User.ContactDetails();
  userEmail.setPlatform("EMAIL");
  userEmail.setIdentifier(email);

  user.setContactDetailsList(userEmail);

  return user;
};

const addUser = (userSpec) => {
  const request = new AddUserRequest();

  request.setUser(createUser(userSpec));

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
