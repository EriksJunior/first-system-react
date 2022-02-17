import { http } from "../../config/index";

class ClienteFunctions {
  async saveCliente(dataCliente) {
    try {
      const { data } = await http.post("/cliente", dataCliente);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClienteFunctions();
