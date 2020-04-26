import React from "react";
import View from "../components/View";
import Form from "../components/Forms/Form";
import Label from "../components/Forms/Label";
import Input from "../components/Forms/Input";
import TextArea from "../components/Forms/TextArea";
import Button from "../components/Button";
import Post from "../components/Post";

const ServiceFormView = () => {
  return (
    <View>
      <Post>
        <h1>Offer a service to your community</h1>
        <Form>
          <Label>Service</Label>
          <Input type="text" placeholder="" />

          <Label>Please describe what you provide</Label>
          <TextArea />
        </Form>
        <Button title="Post" />
      </Post>
    </View>
  );
};

export default ServiceFormView;
