import React from 'react';
import styled from 'styled-components';


const TableData = () => {
    const data = [
        { Date: '4/1/22', Month: 'Jan', Year: 2022, Supplier: 'Reliance', Emissions: 1698, Revenue: 203456, R_E: 120 },
        { Date: '3/1/23', Month: 'Jan', Year: 2023, Supplier: 'Reliance', Emissions: 1790, Revenue: 245678, R_E: 137, 'YOY R_E Change': 15 },
        { Date: '2/2/22', Month: 'Feb', Year: 2022, Supplier: 'Reliance', Emissions: 2108, Revenue: 203456, R_E: 96.5 },
        { Date: '5/2/23', Month: 'Feb', Year: 2023, Supplier: 'Adani', Emissions: 2205, Revenue: 220000, R_E: 99.8, 'YOY R_E Change': 3 },
        { Date: '6/3/22', Month: 'Mar', Year: 2022, Supplier: 'Reliance', Emissions: 2251, Revenue: 245647, R_E: 109.1 },
        { Date: '7/3/23', Month: 'Mar', Year: 2023, Supplier: 'Adani', Emissions: 2345, Revenue: 287545, R_E: 122.6, 'YOY R_E Change': 12 },
        { Date: '2/4/22', Month: 'Apr', Year: 2022, Supplier: 'Shaurya Drugs', Emissions: 1602, Revenue: 179853, R_E: 112.3 },
        { Date: '2/4/23', Month: 'Apr', Year: 2023, Supplier: 'Adani', Emissions: 1503, Revenue: 195395, R_E: 130.0, 'YOY R_E Change': 16 },
        { Date: '3/5/22', Month: 'May', Year: 2022, Supplier: 'Orlife Healthcare', Emissions: 3456, Revenue: 464464, R_E: 134.4 },
        { Date: '4/5/23', Month: 'May', Year: 2023, Supplier: 'Adani', Emissions: 4634, Revenue: 575747, R_E: 124.2, 'YOY R_E Change': -8 },
        { Date: '3/6/22', Month: 'June', Year: 2022, Supplier: 'Orlife Healthcare', Emissions: 3245, Revenue: 464464, R_E: 143.1 },
        { Date: '4/6/23', Month: 'June', Year: 2023, Supplier: 'Adani', Emissions: 4634, Revenue: 575747, R_E: 124.2, 'YOY R_E Change': -13 },
        { Date: '5/7/23', Month: 'July', Year: 2023, Supplier: 'Reliance', Emissions: 3487, Revenue: 575747, R_E: 165.1, 'YOY R_E Change': 26 },
        { Date: '3/8/22', Month: 'Aug', Year: 2022, Supplier: 'Rezicure Pharmaceuticals', Emissions: 5445, Revenue: 643864, R_E: 118.2 },
        { Date: '5/8/23', Month: 'Aug', Year: 2023, Supplier: 'Merion Care', Emissions: 5258, Revenue: 689747, R_E: 131.2, 'YOY R_E Change': 11 },
        { Date: '2/9/22', Month: 'Sep', Year: 2022, Supplier: 'Ruzette Organics', Emissions: 4343, Revenue: 564651, R_E: 130.0 },
        { Date: '6/10/22', Month: 'Oct', Year: 2022, Supplier: 'Steller Bio Labs', Emissions: 3434, Revenue: 516513, R_E: 150.4 },
        { Date: '10/11/23', Month: 'Nov', Year: 2023, Supplier: 'Eskos Pharma', Emissions: 3535, Revenue: 576855, R_E: 163.2, 'YOY R_E Change': 3 },
        { Date: '1/12/22', Month: 'Dec', Year: 2022, Supplier: 'Adani', Emissions: 2324, Revenue: 343535, R_E: 147.8 },
        { Date: '2/12/23', Month: 'Dec', Year: 2023, Supplier: 'Reliance', Emissions: 2452, Revenue: 354646, R_E: 144.6, 'YOY R_E Change': -2 }
    ];

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Supplier</th>
                    <th>Emissions</th>
                    <th>Revenue</th>
                    <th>YOY R/E Change</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.Date}</td>
                        <td>{row.Month}</td>
                        <td>{row.Year}</td>
                        <td>{row.Supplier}</td>
                        <td>{row.Emissions}</td>
                        <td>{row.Revenue}</td>
                        <td>{row.R_E}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default TableData;






const StyledTable = styled.table`
// border:2px solid red;
margin-left:60%;
margin-top:10%;
width: 643px
height: 540.1px
top: 788px
left: 754px
border-collapse: collapse;
th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }
`;