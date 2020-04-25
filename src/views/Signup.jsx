import React, { useState } from "react";
import styled from "styled-components";
import userClient from "../gRPC/userClient";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

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
    <Wrapper>
      <h1>Sign Up</h1>
      <Form>
        <label>Name</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setState({ ...state, name: value });
          }}
          value={state.name}
        />
      </Form>

      <h2>Address</h2>
      <Form>
        <label>Address</label>
        <input
          type="text"
          onChange={updateAddressField("address")}
          value={state.address.address}
        />
        <label>City</label>
        <input
          type="text"
          onChange={updateAddressField("city")}
          value={state.address.city}
        />
        <label>Postcode</label>
        <input
          type="text"
          onChange={updateAddressField("postcode")}
          value={state.address.postcode}
        />
        <label>Country</label>
        <input
          type="text"
          onChange={updateAddressField("country")}
          value={state.address.country}
        />
      </Form>

      <h2>Contact details</h2>

      <Form>
        <label>Email</label>
        <input
          type="text"
          onChange={updateContactField("email")}
          value={state.contact.email}
        />
      </Form>
      <button onClick={addUser}>Sign up</button>
    </Wrapper>
  );
};

export default SignUpView;
