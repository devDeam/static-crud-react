import React from "react";
import KNIGHTS from "../../knights.model";
import TableArrow from "./TableArrow";

const CrudTable = ({
    data, setDataToEdit, deleteKnight
}:{
    data: KNIGHTS[],
    setDataToEdit: React.SetStateAction<KNIGHTS> | null | any,
    deleteKnight: Function,
}): JSX.Element => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={3}>Sin datos</td>
            </tr>
          ) : (
            data.map((el: KNIGHTS) => (
              <TableArrow
                el={el}
                key={el.id}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
