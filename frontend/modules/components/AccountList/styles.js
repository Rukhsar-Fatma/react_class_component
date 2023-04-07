import styled from "styled-components";

const BoxWrapper = styled.div`
  width : 100%;
  min-height: fit-content;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 3px;
`;

const FormColumn = styled.div`
  width: 275px;
  height: fit-content;
  padding: 70px 60px;
`;
const FormRow = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 5vw;
  row-gap: 5vh;
`;

const WhiteBox = styled.div`
  height: calc(100vh - 115px);
  background-color: rgb(255,255,255);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  overflow : scroll;
  &::- webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: rgb(139,142,133);
  }
  &::-webkit-scrollbar {
    height : 4px;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: rgb(139,142,133);
    border: 1px solid rgb(139,142,133);
  }
`;

const MainHeading = styled.h2`
  color: #112222;
  font-style: Roboto, sans-serif;
  font-size: 20px;
  margin-bottom: 8px;
`;
const SubHeading = styled.h2`
  color: #67757e;
  font-style: Roboto, sans-serif;
  font-size: 15px;
`;

const ActionAddBox = styled.div`
  & #Link {
    width: 260px;
    height: 80px;
    border: 1px solid rgb(202, 211, 227);
    border-radius: 4px;
    margin: 8px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #67757e;
    &:hover {
      & #facebook {
        color: #1a76d2;
      }
      & #whatsapp {
        color: #60cb5a;
      }
      & #telegram {
        color: #34a9e5;
      }
      & #botIcon {
        color : rgb(86, 41, 182);
      }
    }
  }
`;

const Table = styled.table`
  text-transform: uppercase;
  font-size: 11px;
  font-family : 'montserrat, arial verdana;
  border-collapse: collapse;
  whitespace: nowrap;
`;

const TableHead = styled.thead`
  color : #AAAEB3;
  fontWeight : 600;
`;
const TableBody = styled.tbody`
  color: #444444;

`;
const TableRow = styled.tr`

`;
const TableData = styled.td`
  textAlign : center;
  border : 1px solid #EEE;
  padding : 10px;
  width : 10%;
`;

const styles = {
  WhiteBox,
  FormColumn,
  FormRow,
  MainHeading,
  SubHeading,
  BoxWrapper,
  ActionAddBox,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableData,
};

export default styles;
