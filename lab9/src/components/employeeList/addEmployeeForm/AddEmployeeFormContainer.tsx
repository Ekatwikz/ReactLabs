import React, {useState} from 'react';
import AddEmployeeForm from "./AddEmployeeForm";
import {Employee} from "../../../model/Employee";
import {addEmployee} from "../../../logic/api";
import Loader from "../../utils/Loader";

export interface AddEmployeeProps {
    updateList: () => void;
}

const AddEmployeeFormContainer: React.FC<AddEmployeeProps> = (props: AddEmployeeProps) => {
    const [isEmployeeFormHidden, setIsEmployeeFormHidden] = useState(true);
    const [submittingNewEmployee, setSubmittingNewEmployee] = useState(false);

    return (
        <>
            <h1>Add Employee</h1>
            <Loader loading={submittingNewEmployee} label="Saving">
                {
                    isEmployeeFormHidden ?
                    <button onClick={() => setIsEmployeeFormHidden(false)}>Add employee</button>
                    :
                    <AddEmployeeForm hideForm={() => setIsEmployeeFormHidden(true)}
                        saveEmployee={(employee) => {
                            setSubmittingNewEmployee(true);
                            addEmployee(employee)
                                .then(() => props.updateList())
                                .catch(err => console.error(JSON.stringify(err)))
                                .finally(() => setSubmittingNewEmployee(false))
                        }
                    }/>
                }
            </Loader>
        </>
    )
}

export default AddEmployeeFormContainer;
