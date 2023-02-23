import React, { useState } from 'react';
import KNIGHTS from '../../knights.model';
import CrudForm from '../form/CrudForm';
import CrudTable from '../table/CrudTable';

const initialDb: KNIGHTS[] = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
    },
]

const CrudApp = (): JSX.Element => {
  const [db, setDb] = useState<KNIGHTS[]>(initialDb);
  const [dataToEdit, setDataToEdit] = useState<KNIGHTS | null>(null);

  const createKnight = (data: KNIGHTS): void => {
    let lastPosition: number = db.length-1;
    let lastId: number | null | undefined = db[lastPosition].id;
    if(lastId != null || lastId != undefined){
        data.id = lastId+1;
    }
    setDb([...db, data]);
    console.log(data)
  }
  const updateKnight = (data: KNIGHTS): void => {
    let newData: KNIGHTS[] = db.map(el=> el.id === data.id ? data : el);
    setDb(newData);
  }
  const deleteKnight = (id: number): void => {
    let isDelete: boolean = confirm(`¿Estás seguro de eliminar el registro con el id = '${id}' ?`);
    if(isDelete){
      let newData: KNIGHTS[] = db.filter(el => el.id !== id);
      setDb(newData);
    }else{
      return;
    }
  }
  return (
    <div>
        <h2>CRUD App</h2>
        <article className="grid-1-2">
          <CrudForm createKnight={createKnight}
          updateKnight={updateKnight}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          />
          <CrudTable data={db}
          setDataToEdit={setDataToEdit}
          deleteKnight={deleteKnight}
          />
        </article>
    </div>
  )
}

export default CrudApp