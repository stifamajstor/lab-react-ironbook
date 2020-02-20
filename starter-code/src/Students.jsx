import React from "react";
import Student from "./Student";

const Students = props => {
  console.log(props);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Campus</th>
            <th>Role</th>
            <th>Links</th>
          </tr>

          {props.students.map(student => {
            return <Student key={student.id} data={student} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
