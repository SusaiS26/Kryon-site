import { useEffect, useState } from "react";
import { Form, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyModal(props) {
    const { showModal, setShowModal } = props;
    const [segmentName, setSegmentName] = useState("");
    const [schemaSegment, setSchemaSegment] = useState("Add schema to segment");
    const [newSchemaSegment, setNewSchemaSegment] = useState("age");
    const [showNewSchema, setShowNewSchema] = useState(false);
    useEffect(() => {
        // call click outside
    }, []);
    const onChangeSegmentName = (e) => {
        setSegmentName(e.target.value);
    }
    const onChangeSchemaSegment = (e) => {
        setSchemaSegment(e.target.value);
    }
    const onChangeNewSchemaSegment = (e) => {
        setNewSchemaSegment(e.target.value);
    }
    const addNewSchema = (e) => {
        if (schemaSegment === "Add schema to segment") {
            setShowNewSchema(false);
        }
        else {
            setShowNewSchema(true);
        }
    }
    const submitSchemaSegment = (e) => {
        e.preventDefault();
        let finalPayload={};
        finalPayload["segment_name"]=segmentName;
        let finalSchema=[];
        
        if (schemaSegment === "first_name") {
            finalSchema.push({"first_name":"First Name"});
        }
        else if (schemaSegment === "last_name") {
            finalSchema.push({"last_name":"Last Name"});
        }
        else if (schemaSegment === "gender") {
            finalSchema.push({"gender":"Gender"});
        }
        if(showNewSchema)
        {
            if (newSchemaSegment === "age") {
                finalSchema.push({"age":"Age"});
            }
            else if (newSchemaSegment === "city") {
                finalSchema.push({"city":"City"});
            }
            else if (newSchemaSegment === "state") {
                finalSchema.push({"state":"State"});
            } 
        }
        finalPayload["schema"]=finalSchema;
        console.log("Finall Result",finalPayload);
    }
    return (
        <div
            className={showModal ? "custom-modal-dialog show" : "custom-modal-dialog"}
            role="document"
        >
            <div className="modal-content">
                <div className="custom-modal-header" onClick={() => {
                    setShowModal(false);
                }}>
                    <div className='header-text'><h2> {`  <   Saving Segment`}</h2></div>
                </div>
                <div className="modal-body">
                    <Form className="form-segment">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter the Name of the Segment</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Name of the Segment" value={segmentName} onChange={onChangeSegmentName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Select aria-label="Default select example" value={schemaSegment} onChange={onChangeSchemaSegment}>
                                <option>Add schema to segment</option>
                                <option value="first_name">First Name</option>
                                <option value="last_name">Last Name</option>
                                <option value="gender">Gender</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Nav.Link className="link-schema" onClick={addNewSchema} href="#"> + Add new schema</Nav.Link>
                        </Form.Group>
                        {(() => {
                            if (showNewSchema) {
                                return (<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Select aria-label="Default select example" value={newSchemaSegment} onChange={onChangeNewSchemaSegment}>
                                        <option value="age">Age</option>
                                        <option value="city">City</option>
                                        <option value="state">State</option>
                                    </Form.Select>
                                </Form.Group>)
                            }
                        })()}
                        <Button variant="primary" onClick={submitSchemaSegment} type="submit">
                        Save the Segment
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
