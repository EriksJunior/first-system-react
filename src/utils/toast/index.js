import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastError = (error) => {
  return toast.error(error);
};

const toastSave = (msg) => {
  return toast.error(msg);
};

const toastUpdate = (msg) => {
  return toast.error(msg);
};

const toastDelete = (msg) => {
  return toast.error(msg);
};

export { toastError, toastSave, toastUpdate, toastDelete };
