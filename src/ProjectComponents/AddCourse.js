import axios from "axios";
import React, { Fragment,useEffect, useState } from "react";
import { Form, FormGroup, Label,Input, Container, Button } from "reactstrap";
import base_url from "../Api/SpringBoot_api";
import {toast} from "react-toastify";

const AddCourse = () => {

    useEffect(()=>{
        document.title="Add Courses";
    })

    const [course,setCourse]=useState({});

    //form handler function
    const handleForm=(e)=>{
        //console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    document.addEventListener("submit", function(event) {
        // Prevent default form submit
        event.preventDefault()
      
        // Clear all form fields
        event.target.reset()
      })

    //creating function to post data on server

    const postDataToServer=(data)=>{
        axios.post(`/savecourse`,data).then(
            (response)=>{

                console.log(response);
                console.log("success");
                setCourse({id:"", title:"", description:""});
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    return (
        <Fragment>
            <h2 className="text-center mt-5">Enter Course Details</h2>
            <Form className=" mt-7" onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id : </Label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId" onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                        //this is done so that if i change the id then it must reflect in server, if no id then give the id if id is already present
                        //then update the id with the new id
                    }} />
                </FormGroup>

                <FormGroup>
                    <Label for="title"> Course Title : </Label>
                    <Input type="text" placeholder="Enter Title Here" name="title" id="title" 
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description"> Course Description : </Label>
                    <Input type="textarea" placeholder="Enter Description Here" id="description0" style={{height:150}}
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success" type="submit" onClick={()=>{
                        toast.success("successfully Added !!");
                    }}>Add Course</Button>
                    <Button color="warning" type="reset" style={{marginLeft:'0.8rem'}} onClick={()=>{
                        setCourse({id:"", title:"", description:""});
                    }}>Clear</Button>
                </Container>
            </Form>


        </Fragment>
    )
}
export default AddCourse;