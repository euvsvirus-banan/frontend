import React, { useState } from "react";
import Form from "../components/Forms/Form";
import Button from "../components/Button";
import userClient from "../gRPC/userClient";
import View from "../components/View";
import Input from "../components/Forms/Input";
import Label from "../components/Forms/Label";
import Post from "../components/Post";

const initialState = {
  name: "John Doe",
  address: {
    city: "Fooington",
    country: "United States of Foo",
    address: "Foo Avenue 1",
    postcode: "66666",
  },
  contact: {
    email: "john@fooington.com",
  },
};

const SignUpView = () => {
  const [state, setState] = useState(initialState);

  const addUser = (event) => {
    event.preventDefault();
    userClient.addUser(state);
  };

  const updateAddressField = (field) => ({ target: { value } }) => {
    setState({
      ...state,
      address: {
        ...state.address,
        [field]: value,
      },
    });
  };

  const updateContactField = (field) => ({ target: { value } }) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [field]: value,
      },
    });
  };

  return (
    <View>
      <Post>
        <h1>Sign Up</h1>
        <Form>
          <Label>Name</Label>
          <Input
            type="text"
            onChange={({ target: { value } }) => {
              setState({ ...state, name: value });
            }}
            value={state.name}
          />
        </Form>

        <Form>
          <Label>Address</Label>
          <Input
            type="text"
            onChange={updateAddressField("address")}
            value={state.address.address}
          />
          <Label>City</Label>
          <Input
            type="text"
            onChange={updateAddressField("city")}
            value={state.address.city}
          />
          <Label>Postcode</Label>
          <Input
            type="text"
            onChange={updateAddressField("postcode")}
            value={state.address.postcode}
          />
          <Label>Country</Label>
          <Input
            type="text"
            onChange={updateAddressField("country")}
            value={state.address.country}
          />
        </Form>

        <Form>
          <Label>Email</Label>
          <Input
            type="text"
            onChange={updateContactField("email")}
            value={state.contact.email}
          />
        </Form>

        <Button title="Sign up" onChange={addUser} />
      </Post>
    </View>
  );
};

export default SignUpView;
