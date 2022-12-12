import React, {useState} from 'react';
import {Employee} from "../../model/Employee";
import {deleteEmployee} from "../../logic/api";
import Loader from "../utils/Loader";

export interface EmployeeListItemProps {
    employee: Employee;
    updateList: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = (props: EmployeeListItemProps) => {
    const [attemptingDelete, setAttemptingDelete] = useState(false);

    return (
        <>
            <h3>{props.employee.name}</h3>
            <p>{props.employee.id + "."}</p>
            {props.employee.isActive ? "Active" : "Inactive"}
            <br/>
            
            <Loader loading={attemptingDelete} label="Deleting">
                <button onClick={() => { 
                    setAttemptingDelete(true);
                    deleteEmployee(props.employee.id)
                    .catch(err => {
                        console.error(JSON.stringify(err))
                        setAttemptingDelete(false);
                    })
                    .finally(props.updateList)
                }}>Delete</button>
            </Loader>
        </>
    );
}

export default EmployeeListItem;
