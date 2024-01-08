import React from "react";

const data = [
  {
    id: 1,
    name: "Company Name",
    logo: "https://media.licdn.com/dms/image/C4D0BAQHUWriUOOUr4g/company-logo_100_100/0/1668800772728/tonomy_foundation_logo?e=1712793600&v=beta&t=9r0pnuz_Csx8spLohrAoHt5i8zIZ00LObKr2IkA4Aoc",
    joiningDate: "2012",
    leavingDate: "2011",
    desc: ["THis is One", "THis is Two"],
    skills: ["MERN", "Java"],
  },
];

const Experience = () => {
  return (
    <React.Fragment>
      {data.map((exp, index) => (
        <div key={index}>{JSON.stringify(exp)}</div>
      ))}
    </React.Fragment>
  );
};

export default Experience;
