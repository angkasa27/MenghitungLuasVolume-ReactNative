import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import TopHeader from "../component/TopHeader";
import pic from "../assets/balok.jpg";
import styles from "../assets/style";

class BalokScreen extends Component {
  constructor() {
    super();
    this.state = {
      luas: 0,
      volume: 0,
      p: "",
      t: "",
      l: ""
    };
  }

  hitungLuas = () => {
    let p = Number(this.state.p);

    let t = Number(this.state.t);

    let l = Number(this.state.l);

    let a = 2 * (p * l + l * t + t * p);

    this.setState({ luas: a });
  };

  hitungVolume = () => {
    let p = Number(this.state.p);

    let t = Number(this.state.t);

    let l = Number(this.state.l);

    let v = p * l * t;

    this.setState({ volume: v });
  };

  render() {
    return (
      <View>
        <TopHeader navigation={this.props.navigation} title="BALOK" />
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
            label="Panjang"
            labelStyle={styles.labelInput}
            keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={value => this.setState({ p: value })}
            value={this.state.p.toString()}
          />
          <Input
            label="Lebar"
            labelStyle={styles.labelInput}
            keyboardType="numeric"
            containerStyle={styles.input}
            onChangeText={value => this.setState({ l: value })}
            value={this.state.l.toString()}
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

export default BalokScreen;
