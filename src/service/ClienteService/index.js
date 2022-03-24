import { http } from "../../config/index";
import { toastError } from "../../utils/toast/index";

class ClienteRegisterFunctions {
  async saveCliente(dataCliente) {
    try {
      console.log(dataCliente, ' serviceeeeee')
      const { data } = await http.post("/cliente", dataCliente);
      return data;
    } catch (error) {
      return toastError(error.message);
    }
  }
}

export default new ClienteRegisterFunctions();
