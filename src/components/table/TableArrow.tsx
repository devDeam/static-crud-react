import React from "react";
import KNIGHTS from "../../knights.model";

const TableArrow = ({el}: {el: KNIGHTS}) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button>Editar</button> &nbsp;
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default TableArrow;
