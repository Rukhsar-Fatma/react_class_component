import React, { Component } from "react";
import { Header } from "../../../../common/components/Header";
import WithRouter from "../../../withRouter/MyComponent"
import { SearchBar } from "../../../../common/components/SearchBar";
import axios from 'axios';
import styles from "../../styles";
import commStyles from "../../../../common/styles";
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { connect } from "react-redux";
import { accountListData } from "../../../../common/redux/actions";
import configData from '../../../../../config/configData.json';
import Pagination from '../../../../common/components/Pagination/Pagination.js';
import PaginationLogic from '../../../../common/utils/paginationLogic.js';
import { Link } from 'react-router-dom';
import noDataFound from '../../../../../assets/robot-01.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";

const {
  BoxWrapper, FormColumn, FormRow, Title, TitleLight,
} = styles;

const {
  PrimeMainContainer,
  SubMainContainer,
  WhiteBox,
  MainModelContainer,
  ModelContainer,
  ModelTitleWrapper,
  ModelContentWrapper,
  IconWhiteHover,
  Form,
  FormInput,
  ButtonWrapper,
  ButtonSecondary,
  ButtonSuccess,
  FormInputSelect,
  FormInputSelectOption,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableData,
  SubHeading,
} = commStyles;

class InboundDidMapping extends Component {
  state = {
    // accountListDataReducer : this.props.state.accountListDataReducer,
    currentPage: 1,
    numberOfDataInOnePage: 3,
    pageCount: 0,
    searchPhone: '',
    searchResult: [],
    responseData: [],
    filteredResponseData: [],
    isModelOpen: false,
    isModelUpdate: false,
    updateid:"",
    resultJson: {
      phoneNumber: "",
      eventUrl: "",
      dialer: ""
    }
  };

  createInboundMapping = (event) => {
    event.preventDefault()
    this.setState({ isModelOpen: true })
  }

  updateInboundMapping = (event) => {
    event.preventDefault()
    this.setState({ isModelUpdate: true })
  }

  handleInputChange = (event) => {
    let resultJson = { ...this.state.resultJson }
    resultJson[event.target.name] = event.target.value;
    this.setState({ resultJson })
  }
  handleSearchInput = (event) => {
    const searchPhone = event.target.value;
    this.setState({ searchPhone });
  }

  handleSearch = async (e) => {
    e.preventDefault()
    const search = await axios.post(`http://localhost:8000/search_inbound`, { phoneNumber: this.state.searchPhone })
    console.log("Searched Data==========>", search.data.response)
    this.setState({ responseData: search.data.response.Result })
    // console.log("SEARCH DATA FROM DATABASE: ",search)
  }
  handleDelete = async (delid) => {
    // alert(id)
    const del_inbound = await axios.post(`http://localhost:8000/inbound/delete_inbound`, { id: delid })
    alert("Sure you want to delete it?")
    console.log("Deleted Data==========>", del_inbound.data.response)
  }

  handleUpdate = async (id) => {
    await this.setState({ isModelUpdate: true });
    this.setState({updateid:id})
  }
  handleUpdateSubmit = async (e) => {
    // alert("kghfgkjhjfvh")
    e.preventDefault()
    try{
      const inbound_update = await axios.post(`http://localhost:8000/inbound/update_inbound/${this.props.params.name}`,{phoneNumber:this.state.resultJson.phoneNumber,id:this.state.updateid})
      console.log(inbound_update)
    }catch(err){
      console.log(err)
    }
    
    // console.log("Update Data==========>", inbound_update.data.response)
    // this.setState({
    //   resultJson: inbound_update.data.response.inbound_update
    // })
  }

  handleDidFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const didSubmit = await axios.post(`http://localhost:8000/inbound/create_inbound/${this.props.params.name}`, this.state.resultJson, {
        headers: {
          "Access-Control-Allow-Headers": "*",
          "app_key": "slashUser",
          "app_secret": "sl@sh^%$",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "postman-token": "8ed24811-cc8f-9c27-6961-7b7c2a3de7dd",
        },
      });
      console.log("Inbound Data==========>", didSubmit.data.response)
      this.setState({
        resultJson: didSubmit.data.response.Result
      })

    } catch (error) {
      console.log('Error response ===>', error.response);
      console.log('Error message ===>', error.message);
      toast.error(error.message);
    }
  }

  async componentDidMount() {
    await this.fetchResponse()
  }

  fetchResponse = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/inbound/get_inbound/${this.props.params.name}/${this.state.currentPage}/${this.state.numberOfDataInOnePage}`, {
        headers: {
          "Access-Control-Allow-Headers": "*",
          "app_key": "slashUser",
          "app_secret": "sl@sh^%$",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "postman-token": "8ed24811-cc8f-9c27-6961-7b7c2a3de7dd",
        },
      });
      const data = await response.data
      console.log(data.response.totalcount)
      console.log("hellllloooooji", data)
      this.setState({
        responseData: data.response.Inbound,
        pageCount: Math.ceil(data.response.totalcount / this.state.numberOfDataInOnePage),
      })
    } catch (error) {
      console.log('Error ===>', error.message);
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
        `http://localhost:8000/inbound/get_inbound/${this.props.params.name}/${currentPage}/${this.state.numberOfDataInOnePage}`,
      );
      let respdata = await response.data;     
      return respdata.response.Inbound;
    } catch (error) {
      console.log(error);
    }
  };

  handlePageClick = async (data) => {
    let currentPage = data.selected+1;
    const ApiData = await this.fetchData(currentPage);
    this.setState({ responseData: ApiData });

  }

  renderInboundMappingModel = () => {
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
              <Title>Create Inbound DID</Title>
            </ModelTitleWrapper>
            <ModelContentWrapper>
              <Form  >
                <FormColumn style={{ padding: '20px 50px', width: 'calc(100% - 100px)' }}>
                  <FormInput
                    type='text'
                    required={true}
                    name='phoneNumber'
                    placeholder="Phone Number"
                    onChange={this.handleInputChange}
                  ></FormInput>
                  <FormInput
                    type='url'
                    required={true}
                    name='eventUrl'
                    placeholder="Event Url   (Ex: grpc://3.109.225.205:9091)"
                    onChange={this.handleInputChange}
                  ></FormInput>
                  <FormInputSelect
                    name="dialer"
                    required={true}
                    style={{ color: (this.state.resultJson.dialer !== "") ? 'black' : '', marginTop: "0px" }}
                    onChange={this.handleInputChange}
                  >
                    <FormInputSelectOption value="" disabled hidden>
                      Select Dialer : True / False
                    </FormInputSelectOption>
                    <FormInputSelectOption value="true">
                      Select Dialer : True
                    </FormInputSelectOption>
                    <FormInputSelectOption value="false">
                      Select Dialer : False
                    </FormInputSelectOption>
                  </FormInputSelect>
                  <ButtonWrapper>
                    <ButtonSecondary onClick={() => { this.setState({ isModelOpen: false }) }}>
                      Cancel
                    </ButtonSecondary>
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      to='/inbounddidmapping'
                    >

                      <ButtonSuccess
                        disabled={(this.state.resultJson.phoneNumber !== "" && this.state.resultJson.eventUrl !== "" && this.state.resultJson.dialer !== "") ? false : true}
                        style={{
                          cursor: (this.state.resultJson.phoneNumber !== "" && this.state.resultJson.eventUrl !== "" && this.state.resultJson.dialer !== "") ? 'pointer' : 'not-allowed',
                          type: 'submit',
                          marginLeft: "10px",
                          textDecoration: "none",
                        }}
                        onClick={(e) => { this.handleDidFormSubmit(e, this.state.resultJson) }}
                      // onClick={() => {
                      //   this.onProjectNameSubmit(this.state.projectName);
                      // }}
                      >
                        Submit
                      </ButtonSuccess>
                    </Link>
                  </ButtonWrapper>
                </FormColumn>
              </Form>
            </ModelContentWrapper>
          </BoxWrapper>
        </ModelContainer>
      </MainModelContainer>
    )
  }
  renderInboundMappingUpdate = () => {
    return (
      <MainModelContainer
        style={
          this.state.isModelUpdate
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <ModelContainer>
          <BoxWrapper>
            <ModelTitleWrapper>
              <Title>Update Inbound DID</Title>
            </ModelTitleWrapper>
            <ModelContentWrapper>
              <Form onSubmit={this.handleUpdateSubmit}>
                <FormColumn style={{ padding: '20px 50px', width: 'calc(100% - 100px)' }}>
                  <FormInput
                    type='text'
                    required={true}
                    name='phoneNumber'
                    placeholder="Phone Number"
                    onChange={this.handleInputChange}
                  ></FormInput>
                  <FormInput
                    type='url'
                    required={true}
                    name='eventUrl'
                    placeholder="Event Url   (Ex: grpc://3.109.225.205:9091)"
                    onChange={this.handleInputChange}
                    disabled
                  ></FormInput>
                  <FormInputSelect
                    name="dialer"
                    required={true}
                    style={{ color: (this.state.resultJson.dialer !== "") ? 'black' : '', marginTop: "0px" }}
                    onChange={this.handleInputChange}
                    disabled
                  >
                    <FormInputSelectOption value="" disabled hidden>
                      Select Dialer : True / False
                    </FormInputSelectOption>
                    <FormInputSelectOption value="true" >
                      Select Dialer : True
                    </FormInputSelectOption>
                    <FormInputSelectOption value="false" >
                      Select Dialer : False
                    </FormInputSelectOption>
                  </FormInputSelect>
                  <ButtonWrapper>
                    <ButtonSecondary onClick={() => { this.setState({ isModelUpdate: false }) }}>
                      Cancel
                    </ButtonSecondary>
                    {/* <Link
                      style={{
                        textDecoration: "none",
                      }}
                      to='/inbounddidmapping'
                    > */}

                      <ButtonSuccess
                        disabled={(this.state.resultJson.phoneNumber !== "" ) ? false : true}
                        style={{
                          // cursor: (this.state.resultJson.phoneNumber !== "" && this.state.resultJson.eventUrl !== "" && this.state.resultJson.dialer !== "") ? 'pointer' : 'not-allowed',
                          type: 'submit',
                          marginLeft: "10px",
                          textDecoration: "none",
                        }}
                        // onClick={(e) => { this.handleUpdate(this.state.resultJson.phoneNumber) }}
              
                      >
                        Submit
                      </ButtonSuccess>
                    {/* </Link> */}
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
        {/* {console.log(this.state.updateid)} */}
        {/* {console.log(this.state.resultJson)} */}
        {/* {console.log(this.state.searchPhone)} */}
        {/* {console.log(this.props.params.name)} */}
        {/* {console.log("Page Count",typeof this.state.pageCount)} */}
        <PrimeMainContainer>
          <Header headerTitle={'Inbound DID'} />
          <SubMainContainer>
            <BoxWrapper>
              <WhiteBox>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TitleLight style={{ flex: 1 }}>
                    <span style={{ fontWeight: '400' }}>Account Name : </span>
                    {/* {this.state.accountListDataReducer.name} */}
                    {this.props.params.name}
                  </TitleLight>
                  {/* <SearchBar placeHolder='Search By Phone Number...' searchText={this.handleSearchData} /> */}
                  <form onSubmit={this.handleSearch}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: " 10px 5px 15px" }}>
                      <input placeholder='Search By Phone Number..' value={this.state.searchPhone} onChange={this.handleSearchInput} />
                      <div style={{ marginLeft: "4px" }}>
                        <button type="submit" style={{ padding: "2px" }}>Search</button> </div>
                    </div>
                  </form>
                  <ButtonSuccess
                    onClick={this.createInboundMapping}
                    style={{ margin: '7px', padding: '7px' }}
                  >
                    Create New Inbound DID
                  </ButtonSuccess>
                </div>
                <WhiteBox style={{ padding: '0px' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableData style={{ width: '10%' }}>Sr. No</TableData>
                        <TableData style={{ width: '20%' }}>Phone Number</TableData>
                        <TableData style={{ width: '20%' }}>Event URL</TableData>
                        <TableData style={{ width: '20%' }}>Dialer Status</TableData>
                        <TableData style={{ width: '20%' }}>Actions</TableData>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.responseData.map((data) => (
                        <TableRow
                          key={data._id}
                        >
                          <TableData>{this.state.responseData.indexOf(data) + 1}</TableData>
                          <TableData>{data.phoneNumber}</TableData>
                          <TableData>{data.eventUrl}</TableData>
                          <TableData>{data.dialer}</TableData>
                          <TableData>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                              <Tooltip title="Edit" arrow>
                                <IconWhiteHover
                                  onClick={() => {
                                    this.handleUpdate(data._id)
                                  }}
                                >
                                  <EditIcon style={{ fontSize: '18px' }} />
                                </IconWhiteHover>
                              </Tooltip>
                              <Tooltip title="Delete" arrow>
                                <IconWhiteHover
                                  onClick={() => {
                                    this.handleDelete(data._id)
                                  }}
                                >
                                  <DeleteIcon style={{ fontSize: '18px' }}></DeleteIcon>
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
            {this.renderInboundMappingModel()}
            {this.renderInboundMappingUpdate()}
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
//   {accountListData})(InboundDidMapping);

export default WithRouter(InboundDidMapping)
