import React from "react";

const Student = props => {
  const { firstName, lastName, campus, role, linkedin } = props.data;

  return (
    <React.Fragment>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{campus}</td>
        <td>{role}</td>
        <td>
          {linkedin ? (
            <a href={linkedin}>
              <img style={{ width: "20px" }} src="/linkedin.png" alt="li" />
            </a>
          ) : (
            ""
          )}
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Student;
