import React, { Component } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "../../../../styles";
import logo from "../../../../../../assets/Logo.png";

const {
  HeaderMainContainer,
  HeaderNav,
  SubHeading,
  IconWhiteHover,
  BoxWrapper,
  HeaderUserContainer,
  HeaderUserNavMain,
  HeaderUserNavSub,
  UserIcon,
} = styles;

class Header extends Component {
  state = {
    accountIcon: false,
  };

  HandleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('token')
    window.location.reload()
  }


  handleAccountIcon = () => {
    if (this.state.accountIcon) {
      this.setState({ accountIcon: false });
    } else {
      this.setState({ accountIcon: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <HeaderMainContainer>
          <HeaderNav>
            <a href="/">
              <img src={logo} style={{ width: "30px", marginLeft : '10px' }} alt="logo" />
            </a>
            <SubHeading
              style={{ color: "black", padding: "14px 20px 14px 20px" }}
            >
              {this.props.headerTitle}
            </SubHeading>
          </HeaderNav>
        </HeaderMainContainer>
      </React.Fragment>
    );
  }
}

export default Header;
