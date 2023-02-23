import React from "react";
import KNIGHTS from "../../knights.model";

const TableArrow = ({
  el,
  setDataToEdit,
  deleteKnight,
}: {
  el: KNIGHTS;
  setDataToEdit: React.SetStateAction<KNIGHTS> | null | any;
  deleteKnight: Function;
}) => {
  let { name, constellation, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button
          onClick={()=>setDataToEdit(el)}
        >Editar</button> &nbsp;
        <button
          onClick={()=>deleteKnight(id)}
        >Eliminar</button>
      </td>
    </tr>
  );
};

export default TableArrow;
