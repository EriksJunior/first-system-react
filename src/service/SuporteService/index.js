import { http } from "../../config/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SuporteRegisterFunctions {
  async saveDataSuporte(dataSuporte) {
    try {
      const { data } = await http.post("/suporte", dataSuporte);
      toast("Técnico Cadastrado com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o Técnico");
      console.log(error.errors.message);
      return null;
    }
  }

  async getAllRegisterSuportesListTable(page) {
    try {
      const { data } = await http.get(`/suporte/${page}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async editDataSuporte(id) {
    try {
      const { data } = await http.get(`/suporte/edit/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async updateDataSuporte(id, dataSuporte) {
    try {
      const { data } = await http.put(`/suporte/${id}`, dataSuporte);
      toast("Técnico atualizado com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao atualizar o Técnico");
      console.log(error);
    }
  }

  async deleteSuporte(id) {
    try {
      const { data } = await http.delete(`/suporte/${id}`);
      toast("Técnico deletado com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao deletar o Técnico");
      console.log(error);
    }
  }

  async fetchCustomerToTechnicalData() {
    try {
      const { data } = await http.get("/suporte/dados/tecnicos/niveis");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SuporteRegisterFunctions();
