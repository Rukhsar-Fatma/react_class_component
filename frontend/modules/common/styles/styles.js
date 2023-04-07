import styled from "styled-components";
import stars from "../../../assets/stars.png";

const MainContainer = styled.section`
  min-width: 100vw;
  min-height: 100vh;
  height: max-content;
  display: flex;
  justify-content: center;
  background-image: url(${stars});
  background-color: rgb(86, 41, 182);
`;
const SubContainer = styled.div`
  width: 80vw;
  min-width: 90vw;
  height: fit-content;
  min-height: 70vh;
  margin: 10vh 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5vw;
  row-gap: 10vh;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 0;
  }
`;
const ContentWrapper = styled.div`
  width: 500px;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 0;
    min-height: fit-content;
    margin-bottom: 40px;
    & .chatBotSvg {
      height: 200px;
    }
  }
`;
const FormWrapper = styled.div`
  width: fit-content;
  height: 100%;
  min-height: 500px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 3px;
  border-radius: 2px;
  margin-bottom: 16px;
`;
const FormColumn = styled.div`
  height: fit-content;
  padding: 30px 40px;
  display : flex;
  flex-direction : column;
`;
const FormRow = styled.div`
  width: calc(100% - 40px);
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items : center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding : 10px 20px;
`;
const Title = styled.h2`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const MainHeading = styled.h2`
  color: #112222;
  font-style: Roboto, sans-serif;
  font-size: 20px;
  margin-bottom: 8px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormInput = styled.input`
  padding: 0px 0px 3px;
  color: rgb(57, 60, 64);
  font-size: 20px;
  outline: currentcolor none 0px;
  display: block;
  border-style: none none solid;
  border-width: medium medium 1px;
  width: 100%;
  height: 34px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  transition: all 0.3s ease 0s;
  margin-bottom: 16px;
  input&:-webkit-autofill,
  input&:-webkit-autofill&:active {
    -webkit-box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;
    box-shadow: 0 0 0 30px rgb(255, 255, 255) inset !important;
  }
`;
const FormInputSelect = styled.select`
  padding: 0px 0px 3px;
  margin: 15px 0px 0px 0px;
  color: rgb(57, 60, 64);
  font-size: 20px;
  outline: currentcolor none 0px;
  display: block;
  border-style: none none solid;
  border-width: medium medium 1px;
  width: 100%;
  height: 34px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  transition: all 0.3s ease 0s;
  margin-bottom: 16px;
  color: rgb(117, 117, 117);
  &:first-child {
    margin: 0px 0px 10px 0px;
  }
`;

const FormInputSelectOption = styled.option`
  color: rgb(44, 56, 63);
`;

const FormInputLabel = styled.label``;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const ButtonSuccessLarge = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  border: 0px none;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease 0s;
  outline: currentcolor none 0px;
  padding: 7px 20px;
  background: rgb(60, 204, 56) none repeat scroll 0% 0%;
  font-size: calc(13px);
  color: rgb(255, 255, 255) !important;
  display: block;
  width: 100%;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: rgb(46, 166, 42) none repeat scroll 0% 0%;
  }
`;

const ButtonSuccess = styled.button`
  font-weight: 600;
  border: 0px none;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease 0s;
  outline: currentcolor none 0px;
  padding: 7px 20px;
  background: rgb(60, 204, 56) none repeat scroll 0% 0%;
  font-size: calc(13px);
  color: rgb(255, 255, 255) !important;
  display: block;
  width: fit-content;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: rgb(46, 166, 42) none repeat scroll 0% 0%;
  }
`;

const ButtonSecondaryLarge = styled.button`
  text-transform: uppercase;
  font-weight: 600;
  border: 0px none;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease 0s;
  outline: currentcolor none 0px;
  padding: 7px 20px;
  background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
  font-size: calc(13px);
  color: rgb(136, 136, 136) !important;
  display: block;
  width: 100%;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
  }
`;

const ButtonSecondary = styled.button`
  font-weight: 600;
  border: 0px none;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease 0s;
  outline: currentcolor none 0px;
  padding: 7px 20px;
  background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
  font-size: calc(13px);
  color: rgb(136, 136, 136) !important;
  display: block;
  width: fit-content;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
  }
`;

const ButtonDenger = styled.button`
  font-weight: 600;
  border: 0px none;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease 0s;
  outline: currentcolor none 0px;
  padding: 7px 20px;
  background: rgb(220,65,70) none repeat scroll 0% 0%;
  font-size: calc(13px);
  color: rgb(136, 136, 136) !important;
  display: block;
  width: fit-content;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
  }
`;

const FormFooterLink = styled.div`
  text-align: center;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 13px !important;
  line-height: 1.53846;
  text-rendering: optimizelegibility;
  &:hover a {
    color: inherit;
    text-decoration: none;
  }
  }
`;

// side bar components
const SideBarMainContainer = styled.div`
  width: fit-content;
  min-height: 100vh;
  height: max-content;
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(86, 41, 182);
  z-index: 1;
`;

const SideBarSubContaienr = styled.div`
  width: fit-content;
  min-height: min-content;
  display: flex;
  flex-direction: column;
`;
const SideBarListedItems = styled.ul`
  width: fit-content;
  height: 46px;
  padding: 5px 10px 5px 0px;
  color: #a189d7;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
  &:hover {
    cursor: pointer;
    color: white;
    & #active {
      background-color: white;
    }
  }
`;
const SideBarActiveListedItems = styled.div`
  display: block;
  width: 5px;
  height: 100%;
`;

// common
const BoxWrapper = styled.div`
  width: 100%;
  min-height: fit-content;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 3px;
  background-color: rgb(255, 255, 255);
`;

const WhiteBox = styled.div`
  height: calc(100vh - 85px);
  background-color: rgb(255,255,255);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  overflow : scroll;
  padding : 0px 10px 10px 10px;
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

// Header Components
const HeaderMainContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  position: fixed;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 3px;
  background-color: rgb(255, 255, 255);
`;
const HeaderNav = styled.nav`
  width: fit-content;
  display: flex;
  align-items: center;
`;
const UserIcon = styled.div`
  width: 26px;
  height: 26px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(86, 41, 182);
  border-radius: 13px;
  margin: 10px 10px 10px 0px;
`;
const IconWhiteHover = styled.div`
  display: flex;
  margin: 7px 14px;
  color: rgb(86, 41, 182);
  &:hover {
    cursor: pointer;
    color: #67757e;
  }
`;
const SubHeading = styled.h2`
  color: #67757e;
  font-style: Roboto, sans-serif;
  font-size: 15px;
`;
const HeaderUserContainer = styled.div`
  position: fixed;
  display: flex;
  right: 10px;
  top: 45px;
  width: max-content;
  height: max-content;
  background-color: wheat;
`;
const HeaderUserNavMain = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;
const HeaderUserNavSub = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid rgb(233, 236, 239);
  &:hover {
    background-color: rgb(240, 240, 240);
    cursor: pointer;
    & #LogoutIcon {
      color: #67757e;
    }
  }
`;

// Page Initiators
const PrimeMainContainer = styled.div`
  width: 100vw;
  max-width : 100vw;
  min-height: 100vh;
  height: max-content;
  display: flex;
  flex-direction: row;
`;
const SubMainContainer = styled.div`
  width : 100vw;
  min-height: calc(100vh - 65px);
  display: flex;
  flex-direction: row;
  gap : 10px;
  align-items: flex-start;
  margin: 55px 10px 10px 10px;
`;

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`;

// Model Components
const MainModelContainer = styled.div`
  display: none;
  padding-top : 10%;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.5);
  position: fixed;
  z-index: 2;
`;

const ModelContainer = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  border-radius: 2px;
`;
const ModelTitleWrapper = styled.div`
  padding: 15px 40px;
  background-color: rgb(86, 41, 182);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;
const ModelContentWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;

// please wait common component
const PleaseWaitMainContainer = styled.div`
  background-color: white;
  opacity: 0.8;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const CircularLoading = styled.div`
  margin: 10px;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid rgb(86, 41, 182);
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SearchBarContainer = styled.input`
  type : search;
  display: flex;
  border: none;
  width: 20%;
  height: 15px;
  padding : 10px;
  margin : 7px 0px;
  color: #444;
  focus : none;
  border-bottom: 1px solid #DDD;
  background: none;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 1px solid rgb(86,41,182);
  }
  &:focus {
    outline : none;
  }
`;

// Table style
const Table = styled.table`
  text-transform: uppercase;
  font-size: 14px;
  font-family : montserrat, arial verdana;
  border-collapse: collapse;
  whitespace: nowrap;
  width : 100%;
  borderSpacing: 0px;
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
  text-align : center;
  border : 1px solid #EEE;
  padding : 10px;
`;

const styles = {
  //common
  WhiteBox,
  MainContainer,
  SubContainer,
  ContentWrapper,
  FormWrapper,
  FormColumn,
  FormRow,
  Title,
  MainHeading,
  Form,
  FormInput,
  FormInputLabel,
  FormInputSelect,
  FormInputSelectOption,
  ButtonWrapper,
  ButtonSuccess,
  ButtonSecondary,
  ButtonDenger,
  ButtonSuccessLarge,
  ButtonSecondaryLarge,
  FormFooterLink,
  IconWhiteHover,
  // Main Page Initiator
  PrimeMainContainer,
  SubMainContainer,
  MainWrapper,
  // side bar components
  SideBarMainContainer,
  SideBarSubContaienr,
  SideBarListedItems,
  SideBarActiveListedItems,
  // header components
  BoxWrapper,
  HeaderMainContainer,
  HeaderNav,
  SubHeading,
  HeaderUserContainer,
  HeaderUserNavMain,
  HeaderUserNavSub,
  UserIcon,
  // Model Components
  MainModelContainer,
  ModelContainer,
  ModelTitleWrapper,
  ModelContentWrapper,
  // PleaseWait
  PleaseWaitMainContainer,
  CircularLoading,
  // SearchBar
  SearchBarContainer,
  // Table style
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableData,
};

export default styles;
