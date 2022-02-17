import { http } from "../../config/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ClienteFunctions {
  async saveCliente(dataCliente) {
    try {
      const { data } = await http.post("/cliente", dataCliente);
      console.log(data);
      this.ovo();
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o cliente");
      console.log(error, "erros save");
    }
  }

  ovo() {
    toast("Cliente salvo com sucesso!");
  }
}

export default new ClienteFunctions();
