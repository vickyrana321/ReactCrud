import React from "react";
import { Form, FormGroup, Label,Input, Container, Button } from "reactstrap";


const UpdateCourse = () => {

    return (
        <div>
            <h2 className="text-center mt-5">Update Course Details</h2>
            <Form className=" mt-7" >
               

                <FormGroup>
                    <Label for="title"> Course Title : </Label>
                    <Input type="text" placeholder="Enter Title Here" name="title" id="title" />
                </FormGroup>

                <FormGroup>
                    <Label for="description"> Course Description : </Label>
                    <Input type="textarea" placeholder="Enter Description Here" id="description0" style={{height:150}} />
                </FormGroup>

                <Container className="text-center">
                    <Button color="primary">Update</Button>
                    
                </Container>
            </Form>


        </div>
    )
}
export default UpdateCourse;
