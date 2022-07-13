import React from "react";
import SelectSearch from "react-select-search";
import "./App.css";

function App() {
  function handleClick() {
    let company = document.getElementById("company").value;
    console.log(company);
  }
  return (
    <div className="App">
      <SelectSearch
        id="company"
        options={[]}
        defaultValue="15997"
        getOptions={(query) => {
          return new Promise((resolve, reject) => {
            fetch(
              `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${query}`
            )
              .then((response) => response.json())
              .then((data) => {
                resolve(
                  data._embedded.enheter.map(
                    ({ organisasjonsnummer, navn }) => ({
                      value: organisasjonsnummer,
                      name: navn,
                    })
                  )
                );
              })
              .catch(reject);
          });
        }}
        search
        placeholder="Skriv inn firmanavn"
      />
    </div>
  );
}

export default App;
