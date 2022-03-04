import { http } from "../../config/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SuporteRegisterFunctions {
  async saveDataSuporte(dataSuporte) {
    try {
      const { data } = await http.post("/suporte", dataSuporte);
      toast("suporte salvo com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar o suporte");
      console.log(error, "erros save");
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
      toast("suporte atualizado com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao atualizar o suporte");
      console.log(error);
    }
  }

  async deleteSuporte(id) {
    try {
      const { data } = await http.delete(`/suporte/${id}`);
      toast("suporte deletado com sucesso!!");
      return data;
    } catch (error) {
      toast.error("Ocorreu um erro ao deletar o suporte");
      console.log(error);
    }
  }
}

export default new SuporteRegisterFunctions();
