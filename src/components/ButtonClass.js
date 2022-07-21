import React from 'react';

// export function Button(props) {
//   console.log(props);
//   const { label = "Default", handleClick = () => console.log("I am default") } = props;
//   return <button onClick={() => console.log("Clicked")}>{label}</button>;
// }

export class ButtonClass extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      label = "Default", 
      handleClick = () => console.log("I am default") 
    } = this.props;
    return <button onClick={handleClick}>{label}</button>;
  }
}