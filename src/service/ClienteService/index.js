import { http } from "../../config/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ClienteFunctions {
  async saveCliente(dataCliente) {
    try {
      const { data } = await http.post("/cliente", dataCliente);
      console.log(data);
      this.ovo();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  ovo() {
    toast("Wow so easy!");
  }
}

export default new ClienteFunctions();
