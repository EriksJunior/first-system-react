import "./AgendaComponent.css";
import RowInputsComponent from "../RowInputsComponent";
import { InputComponent } from "../InputComponent";

function Agenda() {
  return (
    <div>
      <div>
        <RowInputsComponent>
          <InputComponent labelText={"meu ovo"}></InputComponent>
        </RowInputsComponent>
      </div>
    </div>
  );
}

export default Agenda();
