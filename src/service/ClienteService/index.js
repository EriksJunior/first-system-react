import { http } from "../../config/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ClienteFunctions {
  async saveCliente(dataCliente) {
    try {
      const { data } = await http.post("/cliente", dataCliente);
      console.log(data);
      toast("Cliente salvo com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o cliente");
      console.log(error, "erros save");
    }
  }

  async getAllClientes() {
    try {
      const { data } = await http.get("/cliente");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClienteFunctions();
