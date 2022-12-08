import React, {useState} from 'react';
import {Employee} from "../../model/Employee";
import {deleteEmployee} from "../../logic/api";
import Loader from "../utils/Loader";

export interface EmployeeListItemProps {
    employee: Employee;
    updateList: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = (props: EmployeeListItemProps) => {
    return (
        <></>
    );
}

export default EmployeeListItem;
