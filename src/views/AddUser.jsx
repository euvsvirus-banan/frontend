import React, { useState } from "react";

const SignUpView = () => {
  const [state, setState] = useState({});

  const addUser = (event) => {
    event.preventDefault();
    console.log("Making a gRPC request with", state);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={addUser}>
        <label>Name:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setState({ ...state, name: value });
          }}
        />

        <h2>Address</h2>
        <label>Address:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setState({
              ...state,
              address: {
                ...state.address,
                address: value,
              },
            });
          }}
        />
        <label>City:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setState({
              ...state,
              address: {
                ...state.address,
                city: value,
              },
            });
          }}
        />
        <label>Postcode:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setState({
              ...state,
              address: {
                ...state.address,
                postcode: value,
              },
            });
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setState({
              ...state,
              address: {
                ...state.address,
                country: value,
              },
            });
          }}
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpView;
