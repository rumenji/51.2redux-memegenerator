import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./memeSlice";
import {
    Card,
    CardBody,
    ListGroup
  } from "reactstrap";


function MemeForm(){
    const dispatch = useDispatch();
    const INITIAL_STATE = {url: "", top: "", bottom: ""};
    // State of the form - initial state is blank
    const [formData, setFormData ] = useState(INITIAL_STATE);

    //Handles changes to inputs
    const handleChange = (evt) => {
        const {name, value} = evt.target;

        setFormData(fData => ({
            ...fData, [name]: value
        }));
    };

    // Handles submit - adds new item and redirects to the list of items from the same category
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(add(formData))
        }
   
    return (
        <section className="col-md-4">
      <Card>
        <CardBody>
        <form onSubmit={handleSubmit}>
        <ListGroup>
            <label htmlFor="url">Image URL: </label>
            <input type="text" 
                    id="url"
                    name="url" 
                    placeholder="Image URL" 
                    value={formData.url}
                    onChange={handleChange} />

            <label htmlFor="top">Top text: </label>
            <input type="text" 
                    id="top"
                    name="top" 
                    placeholder="Top text" 
                    value={formData.top}
                    onChange={handleChange} />  

            <label htmlFor="bottom">Bottom text: </label>
            <input type="text" 
                    id="bottom"
                    name="bottom" 
                    placeholder="Bottom text" 
                    value={formData.bottom}
                    onChange={handleChange} />
            <button>Generate</button>
            </ListGroup>
        </form>
        </CardBody>
        </Card>
        </section>
    )
};

export default MemeForm;