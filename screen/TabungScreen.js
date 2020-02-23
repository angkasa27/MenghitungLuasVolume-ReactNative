import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import TopHeader from "../component/TopHeader";
import pic from "../assets/tabung.jpg";
import styles from "../assets/style";

class TabungScreen extends Component {
  constructor() {
    super();
    this.state = {
      luas: 0,
      volume: 0,
      r: "",
      t: ""
    };
  }

  hitungLuas = () => {
    let r = Number(this.state.r);

    let t = Number(this.state.t);

    let l = 2 * 3.14 * r * r + 2 * 3.14 * r * t;

    this.setState({ luas: l });
  };

  hitungVolume = () => {
    let r = Number(this.state.r);

    let t = Number(this.state.t);

    let v = 3.14 * r * r * t;

    this.setState({ volume: v });
  };

  render() {
    return (
      <View>
        <TopHeader navigation={this.props.navigation} title="TABUNG" />
        <View style={styles.container}>
          <Image
            source={pic}
            style={{
              height: 200,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <Input
            label="Panjang rusuk"
            labelStyle={styles.labelInput}
            keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={value => this.setState({ r: value })}
            value={this.state.r.toString()}
          />
          <Input
            label="Tinggi"
            labelStyle={styles.labelInput}
            keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={value => this.setState({ t: value })}
            value={this.state.t.toString()}
          />
          <Button
            containerStyle={styles.hitung}
            title="Hitung"
            onPress={() => {
              this.hitungLuas();
              this.hitungVolume();
            }}
          />
          <Text style={styles.resultL}>Luas = {this.state.luas} </Text>
          <Text style={styles.resultV}>Volume ={this.state.volume}</Text>
        </View>
      </View>
    );
  }
}

export default TabungScreen;
