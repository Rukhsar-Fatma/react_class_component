import React, { Component } from "react";
import styles from "../../../../styles";

const {
  SearchBarContainer
} = styles



class SearchBar extends Component {
  state = {};

  handleChange = (event) => {
    this.props.searchText(event.target.value);
  }

  render() {
    let placeHolder = this.props.placeHolder
    return (
      <React.Fragment>
        <SearchBarContainer
          placeholder={placeHolder}
          onChange={this.handleChange}
        >
        </SearchBarContainer>
      </React.Fragment>
    );
  }
}

export default SearchBar;
