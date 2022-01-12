import React from "react";
import MyContext from "./myContext";

class Daughter extends React.Component {
  render() {
    return (
      <div>
        <h1>Eu sou a filhaaaa</h1>
        <MyContext.Consumer>
          {value => (
            <div>
              <p>
                {`Eu tenho ${value.money} pra gasstar`}
              </p>
              <button onClick={value.spend}> gastarr
              </button>
            </div>
          )
          }
        </MyContext.Consumer>
      </div>
    );
  }
}
export default Daughter;
