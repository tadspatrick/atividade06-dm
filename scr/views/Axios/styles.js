import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#330000",
    borderBottomColor: "#ff8000",
    borderBottomWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",
  },
  input: {
    width: "90%",
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    textAlign: "center",
    marginBottom: 15,
  },
  textDate: {
    color: "#330000",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },
  touch: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#330000",
    borderRadius: 12,
    marginBottom: 20,
  },
  touchText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff8000",
  },
  list: {
    width: "90%",
    borderColor: "#330000",
    borderTopWidth: 2,
    paddingTop: 15,
  },
  textListItem: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff8000",
  },
  modal: {
    flex: 1,
    backgroundColor: "#000",
    opacity: 0.92,
    alignItems: "center",
    paddingTop: 40,
  },
  textModalDate: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  textModalAct: {
    color: "#ff8000",
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonModal: {
    position: "absolute",
    bottom: 25,
    width: "90%",
    height: 50,
    backgroundColor: "#ff8000",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
