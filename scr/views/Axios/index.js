import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";

import styles from "./styles";
import api from "../../services/api";

class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: "",
      date: 2,
      list: [],
      modal: false,
    };

    this.dates = [
      "",
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    this.details = [];
  }

  async componentDidMount() {
    this.read();
  }

  async create() {
    if (this.state.activity != "") {
      await api
        .post("/activity", {
          name: this.state.activity,
          dayweek: this.dates[this.state.date],
        })
        .then((response) => {
          alert("[OK] Cadastrado com Sucesso!");
        })
        .catch((error) => {
          alert("[ERROR]");
        });
      this.read();
    } else {
      alert("[ERROR] Palavra em branco!");
    }
    this.setState({
      activity: "",
      date: 2,
    });
    Keyboard.dismiss();
  }

  async delete(id) {
    await api
      .delete(`/activity/${id}`)
      .then((response) => {
        alert("[OK] Deletado com Sucesso!");
      })
      .catch((error) => {
        alert("[ERROR]");
      });
    this.read();
  }

  async read() {
    this.setState({ load: true });
    await api
      .get("/activity")
      .then((response) => {
        this.setState({
          list: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ load: false });
  }

  listAndIndicator() {
    if (this.state.load) {
      return <ActivityIndicator size="large" color="#CC0" />;
    }
    return this.state.list.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={styles.listItem}
          onPress={() => {
            this.setWordUpdate(item);
          }}
        >
          <Text style={styles.textListItem}>{item.value}</Text>
        </TouchableOpacity>
      );
    });
  }

  async componentDidMount() {
    this.read();
  }

  openModal() {
    let aux = [];
    let text;

    this.dates.forEach((date, index) => {
      text = "";
      this.state.list.forEach((act, ind) => {
        if (act.dayweek == date) {
          if (text != "") {
            text = text + "/ ";
          }
          text = text + act.name + " ";
        }
      });
      aux[index] = text;
    });

    this.details = aux;
    // console.log(this.details)
    this.setState({
      modal: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Atividades Semanais</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Atividade"
          onChangeText={(text) => this.setState({ activity: text })}
        />

        <Text style={{ color: "#999" }}> Dia da Semana</Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#330000"
          thumbTintColor="#ff8000"
          value={this.state.date}
          onValueChange={(value) =>
            this.setState({ date: parseInt(value.toFixed(0)) })
          }
        />

        <Text style={styles.textDate}>
          {this.state.date == 0 ? "" : this.dates[this.state.date]}
        </Text>

        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            this.create();
          }}
        >
          <Text style={styles.touchText}>Gravar</Text>
        </TouchableOpacity>

        <ScrollView style={styles.list}>
          {this.state.list.map((item, index) => {
            return (
              <Text key={index} style={styles.textListItem}>
                {item.name}
              </Text>
            );
          })}
        </ScrollView>
        <TouchableOpacity style={styles.touch} onPress={() => this.openModal()}>
          <Text style={styles.touchText}>Mais Informações</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modal}
        >
          <View style={styles.modal}>
            <Text style={styles.textModalDate}>Domingo</Text>
            <Text style={styles.textModalAct}>{this.details[1]}</Text>
            <Text style={styles.textModalDate}>Segunda</Text>
            <Text style={styles.textModalAct}>{this.details[2]}</Text>
            <Text style={styles.textModalDate}>Terça</Text>
            <Text style={styles.textModalAct}>{this.details[3]}</Text>
            <Text style={styles.textModalDate}>Quarta</Text>
            <Text style={styles.textModalAct}>{this.details[4]}</Text>
            <Text style={styles.textModalDate}>Quinta</Text>
            <Text style={styles.textModalAct}>{this.details[5]}</Text>
            <Text style={styles.textModalDate}>Sexta</Text>
            <Text style={styles.textModalAct}>{this.details[6]}</Text>
            <Text style={styles.textModalDate}>Sábado</Text>
            <Text style={styles.textModalAct}>{this.details[7]}</Text>
            <TouchableOpacity
              style={styles.buttonModal}
              onPress={() => this.setState({ modal: false })}
            >
              <Text style={styles.textModalDate}>Sair</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Axios;
