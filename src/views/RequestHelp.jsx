import React from "react";
import View from "../components/View";
import Form from "../components/Forms/Form";
import Label from "../components/Forms/Label";
import Input from "../components/Forms/Input";
import TextArea from "../components/Forms/TextArea";
import Button from "../components/Button";
import Post from "../components/Post";

const RequestHelpView = () => {
  return (
    <View>
      <>
        <Post>
          <h1>Request Help</h1>
          <Form>
            <Label>Title</Label>
            <Input type="text" placeholder="Getting groceries..." />

            <Label>Please describe what you need help with</Label>
            <TextArea />

            <Label>Skills</Label>
            <Input type="text" placeholder="skill1, skill2, ..." />
          </Form>
          <Button title="Post" />
        </Post>
      </>
    </View>
  );
};

export default RequestHelpView;
