import React from "react";

export default function NctListUsers({ renderNctUsers }) {
  const NctElements = renderNctUsers.map((nctItem, index) => {
    return (
      <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{nctItem.id}</td>
          <td>{nctItem.NctName}</td>
          <td>{nctItem.NctUserName}</td>
          <td>{nctItem.NctPass}</td>
        </tr>
      </>
    );
  });
  return (
    <div>
      <h2>Danh Sach Tai Khoan</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>{NctElements}</tbody>
      </table>
    </div>
  );
}
