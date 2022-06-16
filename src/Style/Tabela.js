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
      transition: 1s;
    }
  }
  
`;

export const StyleInput = styled.input`
   border: none;
    border-bottom: 1px solid white;
    font-size: 20px;
`;

export const StyleImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  img{
    width: 1000px;
    height: 400px;
    margin-bottom: 50px;
  }

  input{
    margin-bottom: 60px;
  }

`;

export const StyleForm = styled.form`

  input{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  select{
    border: none;
    border-bottom: 1px solid white;
      :focus{
        outline: none !important;
        border: hidden;
        border-bottom: 1px solid yellow;
        color: yellow;
        transition: 1.5s;
      }
  }

  button{
    padding: 10px;
    border-radius: 5px;
  }

  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }


  input{
    border: none;
    border-bottom: 1px solid white;
      :focus{
        outline: none !important;
        border: none;
        border-bottom: 1px solid yellow;
        color: yellow;
        transition: 1.5s;
      }
  }
`;
