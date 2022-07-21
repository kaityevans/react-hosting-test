import React from 'react';

export function Button(props) {
  console.log(props);
  const { label = "Default", handleClick = () => console.log("I am default")} = props;
  return <button onClick={() => console.log(handleClick())}>{label}</button>;
}