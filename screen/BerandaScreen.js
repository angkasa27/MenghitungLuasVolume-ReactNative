import React, { Component } from "react";
import { View, Text } from "react-native";
import TopHeader from "../component/TopHeader";

class BerandaScreen extends Component {
  render() {
    return (
      <View>
        <TopHeader navigation={this.props.navigation} title="BERANDA" />
        <Text>Ini Halaman Beranda</Text>
      </View>
    );
  }
}

export default BerandaScreen;
