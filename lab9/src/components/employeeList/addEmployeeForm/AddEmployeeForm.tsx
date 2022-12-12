import React, {useState} from 'react';
import {generateKey} from "../../../utils/generateKey";
import {Employee} from "../../../model/Employee";
import Loader from "../../utils/Loader";

export interface AddEmployeeFormProps {
    saveEmployee: (employee: Employee) => void;
    hideForm: () => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = (props: AddEmployeeFormProps) => {
    const [employeeName, setEmployeeName] = useState("");

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={employeeName} onChange={e => setEmployeeName(e.target.value)} placeholder="Name"/>
                <button onClick={() => props.hideForm()}>Cancel</button>
                <button onClick={() => {
                    props.saveEmployee({
                        id: generateKey(),
                        name: employeeName,
                        isActive: true,
                    })
                }}>Save</button>
            </form>
        </>
    )
}

export default AddEmployeeForm;
