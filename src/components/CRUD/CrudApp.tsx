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
  const [dataToEdit, setDataToEdit] = useState<KNIGHTS | boolean | null>(null);

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

  }
  const deleteKnight = (id: number): void => {
    db.splice(id, 1);
  }
  return (
    <div>
        <h2>CRUD App</h2>
        <CrudForm createKnight={createKnight}
        updateKnight={updateKnight}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable data={db}
        setDataToEdit={setDataToEdit}
        deleteKnight={deleteKnight}
        />
    </div>
  )
}

export default CrudApp