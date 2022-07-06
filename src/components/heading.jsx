import React from "react";
function Heading() {
  const custom = {
    color: "red",
    border: "1px solid black"
  };
  const day = new Date().getHours();
  let period = "";
  if (12 - day >= 0) {
    period = "Good Morning";
    custom.color = "green";
  } else if (day > 12 && day <= 18) {
    period = "Good Afternoon";
    custom.color = "red";
  } else {
    period = "Good Night";
    custom.color = "blue";
  }
  return (
    <h1 className="heading" style={custom}>
      {period}
    </h1>
  );
}
export default Heading;
