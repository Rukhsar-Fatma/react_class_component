import React, { Component } from "react";
import { Header } from "../../../../common/components/Header";
import WithRouter from "../../../withRouter/MyComponent"
// import { SearchBar } from "../../../../common/components/SearchBar";
import axios from 'axios';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import Tooltip from '@mui/material/Tooltip';
import styles from "../../styles";
import commStyles from "../../../../common/styles";
import { connect } from "react-redux";
import { accountListData } from "../../../../common/redux/actions";
// import fakeJson from '../../../../../fakeData.json';
import configData from '../../../../../config/configData.json';
// import Pagination from '../../../../common/components/Pagination/Pagination.js';
// import PaginationLogic from '../../../../common/utils/paginationLogic.js';
import { Link } from 'react-router-dom';
import noDataFound from '../../../../../assets/robot-01.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";

const {
  BoxWrapper, FormColumn, FormRow

} = styles;

const {
  PrimeMainContainer,
  SubMainContainer,
  WhiteBox,
  IconWhiteHover,
  MainModelContainer,
  ModelContainer,
  ModelTitleWrapper,
  Title,
  ModelContentWrapper,
  Form,
  FormInput,
  ButtonWrapper,
  ButtonSecondary,
  ButtonSuccess,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableData,
  SubHeading,
} = commStyles;

class AccountList extends Component {
  state = {
    currentPage: 1,
    currentPageForSearchedData: 1,
    numberOfDataInOnePage: 5,
    pageCount: 0,
    responseData: [],
    searchText: '',
    searchResult: [],
    filteredResponseData: [],
    isModelOpen: false,
    selectedAccountData: {},
    resultJson: {
      count: 0,
    },
  };

  selectedAccountDataSubmit = (event, accountListData) => {
    // event.preventDefault()
    console.log('accountListData', accountListData);
    this.props.accountListData(accountListData);
    this.setState({ selectedAccountDataSubmit: accountListData })
  }

  // handlePageChange = (pageNumber) => {
  //   this.setState({ currentPage: pageNumber });
  // };
  // handleFilteredPageChange = (pageNumber) => {
  //   this.setState({ currentPageForSearchedData: pageNumber });
  // };

  // handleInputChange = (event) => {
  //   let resultJson = { ...this.state.resultJson }
  //   resultJson[event.target.name] = event.target.value;
  //   this.setState({ resultJson })
  // }

  // handleSearchData = (searchText) => {
  //   const filteredResponseData = this.state.responseData.filter((data) => {
  //     let name = data.name
  //     return (
  //       name.includes(searchText)
  //     )
  //   })
  //   if (searchText.length > 0) {
  //     this.setState({
  //       searchText,
  //       filteredResponseData
  //     })
  //   } else {
  //     this.setState({
  //       searchText,
  //       filteredResponseData: []
  //     })
  //   }
  //   console.log("filteredResponseData ==================>", filteredResponseData);
  // }

  handleSearchInput = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText });
  }

  handleSearch = async (e) => {
    e.preventDefault()
    const search = await axios.post(`http://localhost:8000/search`, { search: this.state.searchText })
    console.log("Searched Data==========>", search.data.response)
    this.setState({ responseData: search.data.response.Result })
    // console.log("SEARCH DATA FROM DATABASE: ",search)
  }

  handleCountSubmit = async (event, data) => {
    event.preventDefault()
    try {
      const response = await axios.post(`${configData.POST_CHANNEL_COUNT_TO_CPASS_ACCOUNT}${this.state.selectedAccountData._id}/mapChannelsCount`, {
        headers: {
          "Access-Control-Allow-Headers": "*",
          "app_key": "slashUser",
          "app_secret": "sl@sh^%$",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "postman-token": "8ed24811-cc8f-9c27-6961-7b7c2a3de7dd",
        },
        data: data
      });
      if (response && response.output === true) {
        this.setState({
          responseData: response.data,
          isModelOpen: false
        })
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  async componentDidMount() {
    // this.setState({ loading: true });
    await this.fetchResponse()
  }

  fetchResponse = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/account/${this.state.currentPage}/${this.state.numberOfDataInOnePage}`,
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
            "app_key": "slashUser",
            "app_secret": "sl@sh^%$",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "postman-token": "8ed24811-cc8f-9c27-6961-7b7c2a3de7dd",
          },
        });
      const data = response.data
      console.log(data)
      this.setState({
        responseData: data.Accounts,
        pageCount: Math.ceil(data.totalcount / this.state.numberOfDataInOnePage),
      })
    } catch (error) {
      console.log(error)
      // if (error) {
      //   this.setState({
      //     responseData: fakeJson
      //   })
      // }
    }

  }


  async componentDidUpdate(pp, ps) {
    if ((ps.numberOfDataInOnePage !== this.state.numberOfDataInOnePage) || (ps.currentPage !== this.state.currentPage)) {
      this.fetchResponse()
    }
  }


  fetchData = async (currentPage) => {
    try {
      let response = await axios.get(
        `http://localhost:8000/account/${currentPage}/${this.state.numberOfDataInOnePage}`,
      );
      let respdata = await response.data;
      await this.setState({
        responseData: respdata.Accounts,
        pageCount: Math.ceil(respdata.totalcount / this.state.numberOfDataInOnePage),
      })
      console.log(respdata.Accounts);
      return respdata.Accounts;
    } catch (error) {
      console.log(error);
    }
  };

  handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    console.log(currentPage)
    const ApiData = await this.fetchData(currentPage);
    this.setState({ responseData: ApiData });

  }

  renderChannelMappingModel = () => {
    return (
      <MainModelContainer
        style={
          this.state.isModelOpen
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <ModelContainer>
          <BoxWrapper>
            <ModelTitleWrapper>
              <Title>Channel Mapping</Title>
            </ModelTitleWrapper>
            <ModelContentWrapper>
              <Form >
                <FormColumn style={{ padding: '20px 50px', width: 'calc(100% - 100px)' }}>
                  <FormInput
                    type='number'
                    required={true}
                    name='count'
                    placeholder="Channel Count"
                    onChange={this.handleInputChange}
                  ></FormInput>
                  <ButtonWrapper>
                    <ButtonSecondary onClick={(e) => {
                      e.preventDefault()
                      this.setState({ isModelOpen: false })
                    }}>
                      Cancel
                    </ButtonSecondary>
                    <ButtonSuccess
                      disabled={(this.state.resultJson.count !== 0) ? false : true}
                      style={{
                        cursor: (this.state.resultJson.count !== 0) ? 'pointer' : 'not-allowed',
                        type: 'submit',
                        marginLeft: "10px",
                        textDecoration: "none",
                      }}
                      onClick={(e) => { this.handleCountSubmit(e, this.state.resultJson) }}
                    >
                      Submit
                    </ButtonSuccess>
                  </ButtonWrapper>
                </FormColumn>
              </Form>
            </ModelContentWrapper>
          </BoxWrapper>
        </ModelContainer>
      </MainModelContainer>
    )
  }



  render() {

    return (
      <React.Fragment>
        {console.log("WithRouter ===>",this.props)}
        {console.log("Search Text :", this.state.searchText)}
        {/* {console.log(this.state)} */}
        <PrimeMainContainer>
          <Header headerTitle={'Account List'} />
          <SubMainContainer>
            <BoxWrapper>
              <WhiteBox >
                <form onSubmit={this.handleSearch}>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: " 10px 5px 15px" }}>
                    <input placeholder='Type To Search By Name...' value={this.state.searchText} onChange={this.handleSearchInput} />
                    <div style={{marginLeft:"4px"}}>
                      <button type="submit" style={{padding:"2px"}}>Search</button> </div>
                  </div>
                </form>
                <WhiteBox style={{ padding: '0px' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableData style={{ width: "10%" }}>Sr. No</TableData>
                        <TableData >Name</TableData>
                        <TableData style={{ width: "30%" }}>Inbound</TableData>
                        <TableData style={{ width: "15%" }}>Actions</TableData>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.responseData.map((data) => (
                        <TableRow
                          key={data._id}
                        >
                          <TableData>{this.state.responseData.indexOf(data) + 1}</TableData>
                          <TableData>{data.name}</TableData>
                          <TableData>{data.inboundChannels || 0}</TableData>
                          <TableData>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                              <Link
                                style={{
                                  textDecoration: "none",
                                }}
                                to={`/inbounddidmapping/${data.name}`}
                              >
                                <Tooltip title="Inbound DID Mapping" arrow>
                                  <IconWhiteHover
                                    onClick={(e) => {
                                      this.selectedAccountDataSubmit(e, data);
                                    }}
                                  >
                                    <ContactPhoneOutlinedIcon style={{ fontSize: '18px' }} />
                                  </IconWhiteHover>
                                </Tooltip>
                              </Link>
                              <Tooltip title="Channel Mapping" arrow>
                                <IconWhiteHover
                                  onClick={(e) => {
                                    this.setState({ isModelOpen: true, selectedAccountData: data });
                                  }}
                                >
                                  <AccountTreeOutlinedIcon style={{ fontSize: '18px' }} />
                                </IconWhiteHover>
                              </Tooltip>
                            </div>
                          </TableData>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </WhiteBox>
                <FormRow style={{
                  display: (this.state.responseData.length === 0) ? 'flex' : 'none',
                  width: '100%', flexDirection: 'column', alignItems: 'center'
                }}>
                  <img width='300px' src={noDataFound} alt="noDataFound" />
                  <SubHeading>There is No Data...</SubHeading>
                </FormRow>
                <FormRow style={{ width: 'calc(100% - 20px)', margin: "10px", justifyContent: 'center' }}>
                  <select value={this.state.numberOfDataInOnePage}
                    onChange={async (e) => { this.setState({ numberOfDataInOnePage: e.target.value }) 
                  }}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                  // initialPage={this.state.selectedPage}
                  />
                </FormRow>
                {/* {this.renderModelAfterSettingClick()} */}
              </WhiteBox>
            </BoxWrapper>
            {this.renderChannelMappingModel()}
          </SubMainContainer>
        </PrimeMainContainer>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={true}
          pauseOnHover={false}
        />
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return { state };
// };

// export default connect(
//   mapStateToProps,
//   { accountListData })(AccountList);

  export default WithRouter(AccountList)