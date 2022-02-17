import { http } from "../../config/index";

class ClienteFunctions {
  async saveCliente(dataCliente) {
    const { data } = await http.post("/cliente", dataCliente);
    console.log(data);
    return data;
  }
}

export default new ClienteFunctions();
