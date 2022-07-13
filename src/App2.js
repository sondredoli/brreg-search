import React from "react";
import SelectSearch from "react-select-search";
import "./App.css";

function App() {
  return (
    <div className="select-search-container">
      <SelectSearch
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
        placeholder="Firma"
      />
    </div>
  );
}

export default App;
