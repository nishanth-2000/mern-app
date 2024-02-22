import React from 'react';

const DataTable = ({ data }) => {
  console.log({data})
  return (
    <table className="table">
      <thead>
        <tr>
          <th>SLNO</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
