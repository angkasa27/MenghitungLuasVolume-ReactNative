import React, { Component } from "react";
import { Header, Icon } from "react-native-elements";

class TopHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor="#fff"
        leftComponent={
          <Icon
            name="menu"
            color="#1c1c1c"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: "#1c1c1c", fontWeight: "bold" }
        }}
        statusBarProps={{ barStyle: "light-content" }}
      />
    );
  }
}

export default TopHeader;
