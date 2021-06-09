import React, { useMemo } from "react";
import { useTable } from "react-table";
import Columns from '../Table/columns';
import Data from '../Table/data.json'

import "./Table.css";

export default function Table() {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Data, []);
  // Use the useTable Hook to send the columns and data to build the table
  const tableInstance = useTable({
    columns,
    data
  });
  
  const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow 
  } = tableInstance

  return (
    <>
    <div className="payoutWrap">
      <span className="tableTitle">Payout table</span>
      <div className="searchWrap">
        <input type="text" className="searchBox" placeholder="Search something.."/>
        <img className="icon" src="/images/Search.svg" alt="search" />
      </div>
     <div className="calendarWrap">
      <input type="text" className="calendar" placeholder="March 2020"/>
      <img className="icon" src="/images/Calendar.svg" alt="calendar" />

      </div>
      <button className="button">Payout</button>
    </div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="ButtoN">See more</div>
    </>
  );
}

