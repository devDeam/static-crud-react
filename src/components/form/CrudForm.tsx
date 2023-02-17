import React, { useState, useEffect } from "react";
import KNIGHTS from "../../knights.model";
const INITIALFORM = {
    id: null,
    name: "",
    constellation: "",
  }

const CrudForm = ({
  createKnight,
  updateKnight,
  dataToEdit,
  setDataToEdit,
}: {
  createKnight: Function;
  updateKnight: Function;
  dataToEdit: KNIGHTS | boolean | null;
  setDataToEdit: React.SetStateAction<KNIGHTS> | null | any;
}): JSX.Element => {

  // States donde se almacena el valor de los inputs del form.
  const [form, setForm] = useState<KNIGHTS>(INITIALFORM);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!form.name || !form.constellation) {
      alert("Datos incompletos.");
      return;
    }
    if (form.id === null) {
      createKnight(form);
    } else {
      updateKnight(form);
    }
    handleReset();
  };

  const handleReset = (): void => {
    setForm(INITIALFORM);
    setDataToEdit(null);
  };

  const handleChange = (e: React.ChangeEvent): void => {
    const $e: HTMLInputElement = e.target as HTMLInputElement;
    setForm({
      ...form,
      [$e.name]: $e.value,
    });
  };

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={(e) => handleChange(e)}
          value={form.name}
        />
        &nbsp;
        <input
          type="text"
          name="constellation"
          placeholder="Constelación"
          onChange={(e) => handleChange(e)}
          value={form.constellation}
        />
        &nbsp;
        <input type="submit" value="ENVIAR" /> &nbsp;
        <input type="reset" value="LIMPIAR" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
