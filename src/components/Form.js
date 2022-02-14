import React, { useState } from 'react';
import CustomerForm from './Table'
import jsonData from './data.json';

function TableData() {
    const [customerData, setCustomerData] = useState(jsonData);

    const tableRows = customerData.map((arg) => {
        return (
            <tr>
                <td>{arg.firstname}</td>
                <td>{arg.lastname}</td>
                <td>{arg.age}</td>
            </tr>
        );
    });

    const addRows = (data) => {

        const updatedCustomerData = [...customerData];
        updatedCustomerData.push(data);
        setCustomerData(updatedCustomerData);
    };
    

    return (
        <div>
            <CustomerForm func={addRows} />

            <table >
                <thead>
                    <tr>

                        <th>FisrstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>

        </div>
    );
}

export default TableData;
