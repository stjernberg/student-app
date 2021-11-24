import styled from "styled-components/macro";

export const Wrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  margin: auto;
  align-self: center;

  span {
    font-weight: bold;
  }

  .btn {
    background: #5bc0de;
    color: #fff;
  }
`;
