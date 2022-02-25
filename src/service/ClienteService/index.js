import { http } from "../../config/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ClienteFunctions {
  async saveCliente(dataCliente) {
    try {
      const { data } = await http.post("/cliente", dataCliente);
      toast("Cliente salvo com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o cliente");
      console.log(error, "erros save");
    }
  }

  async getAllClientesListTable(page) {
    try {
      const { data } = await http.get(`/cliente/${page}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async editCliente(id, dataCliente) {
    try {
      const { data } = await http.get(`/cliente/edit/${id}`, dataCliente);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClienteFunctions();
