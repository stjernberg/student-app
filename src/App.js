import React from "react";
import styled from "styled-components/macro";

import DataTable from "./components/DataTable";

const App = () => {
  return (
    <Wrapper>
      <DataTable />;
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  /* display: flex;
  justify-content: center; */
`;

export default App;
