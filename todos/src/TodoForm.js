import React, {useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./todoSlice";
import {
    Card,
    CardBody,
    ListGroup
  } from "reactstrap";


function TodoForm(){
    const dispatch = useDispatch();
    const INITIAL_STATE = {todoText: ""};
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
            <label htmlFor="todoText">Todo text: </label>
            <input type="text" 
                    id="todoText"
                    name="todoText" 
                    placeholder="Description" 
                    value={formData.todoText}
                    onChange={handleChange} />
            <button>Add todo</button>
            </ListGroup>
        </form>
        </CardBody>
        </Card>
        </section>
    )
};

export default TodoForm;