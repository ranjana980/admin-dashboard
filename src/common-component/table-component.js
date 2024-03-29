import React from 'react'
import { Table } from 'reactstrap'

export default function MyTableComponent({ columns, data, thStyle, trStyle }) {
    return (
        <div>
            <Table responsive >
                <thead className={thStyle} >
                    <tr className={trStyle}>
                        {columns.map((column) => (
                            <th className={`border-2 border-gray-200 ${column.style}`} key={column.key}>{column.heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={trStyle}>
                            {columns.map((column) => (
                                <td className='border-2 border-gray-200' key={column.key}>{row[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
