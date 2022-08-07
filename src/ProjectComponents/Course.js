import axios from "axios";
import React from "react";
import { Container,Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button } from "reactstrap";

import base_url from "../Api/SpringBoot_api";
import { toast } from "react-toastify";


const Course=({course,update})=>{

const deleteCourse=(id)=>{

axios.delete(`/courses/${id}`).then(
  (response)=>{
    toast.success("course deleted");
    update(id);
  },
  (error)=>{
    toast.error("course not deleted !! server problem")
  }
)

}

  return(

    <div>
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center ml-3">
                    <Button color="danger mr-4" onClick={()=>{
                      deleteCourse(course.id);
                    }} >Delete</Button>
                    <Button color="warning ml-4" style={{marginLeft:'0.8rem'}}>Update</Button>

                </Container>
            </CardBody>
        </Card>
    </div>
  );
  
}
   
export default Course;