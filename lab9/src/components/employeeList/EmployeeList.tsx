import React, {useEffect, useState} from 'react';
import {getEmployees} from "../../logic/api";
import EmployeeListItem from "./EmployeeListItem";
import {Employee} from "../../model/Employee";
import Loader from "../utils/Loader";
import AddEmployeeFormContainer from './addEmployeeForm/AddEmployeeFormContainer';

const EmployeeList: React.FC = () => {
    const [fetchingEmployees, setFetchingEmployees] = useState(true);
    const [employeeList, setEmployeeList] = useState<Employee[]>([])

    function updateList() {
        setFetchingEmployees(true);

        getEmployees()
            .then(employees => setEmployeeList(employees))
            .catch(err => console.error(JSON.stringify(err)))
            .finally(() => setFetchingEmployees(false))
    }

    useEffect(() => {
        updateList()
    }, [])

    return (
        <>
            <Loader loading={fetchingEmployees}>
                <h1>Employee list</h1>
                {
                    employeeList.map(employee =>
                        <EmployeeListItem key={employee.id} employee={employee} updateList={updateList}/>)
                }
                <AddEmployeeFormContainer updateList={updateList} />
            </Loader>
        </>
    );
}
export default EmployeeList;
