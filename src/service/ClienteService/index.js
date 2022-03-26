import { http } from "../../config/index";
import { toastError } from "../../utils/toast/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ClienteRegisterFunctions {
  async saveCliente(dataCliente) {
    try {
      const data = await http.post("/cliente", dataCliente);
      toast("Cliente Cadastrado!");
      return data;
    } catch (error) {
      return toastError(error.response.data.errors[0].message);
    }
  }

  async updateCliente(idCliente, dataCliente) {
    try {
      console.log(idCliente, dataCliente);
      const { data } = await http.put(`/cliente/${idCliente}`, dataCliente);
      toast("Cliente Atualizado!");
      return data;
    } catch (error) {
      return toastError(error.response.data.errors[0].message);
    }
  }

  async deleteCliente(idCliente) {
    try {
      const { data } = await http.delete(`/cliente/${idCliente}`);
      toast("Cliente Deletado!");
      return data;
    } catch (error) {
      return toastError(error.response.data.errors[0].message);
    }
  }
}

export default new ClienteRegisterFunctions();
