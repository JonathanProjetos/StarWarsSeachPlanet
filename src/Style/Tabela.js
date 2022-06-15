import styled from 'styled-components';

export const StyleTabela = styled.form`
  margin: 20px;

  th{
    background-color: #29221f;
    text-align: center;
    background-color: #29221f;
    border-bottom: 1px solid white;
    padding-left: 25px;
    :hover{
      border-bottom: 1px solid yellow;
      color: yellow;
      transition: 1s;
    }
    
  }

  td{
    background-color: #29221f;
    border-bottom: 1px solid white;
    padding: 5px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    :hover{
      border-bottom: 1px solid yellow;
      color: yellow;
      transition: 1.5s;
    }
  }
  
  tr{
  }
`;

export const StyleInput = styled.input`


`;
