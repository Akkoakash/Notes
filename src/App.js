import {useState} from 'react';
import Header from './Header';
import Count from './Count';
import Createnote from './Createnote';
import Data from './Data';
import "./Style.css"
function App() {
  const [datas, setDatas] = useState([]);

  function addData(newData) {
    setDatas((prevValue) => {
      return [...prevValue, newData];
    });
  }
  function deleteDatas(id) {
    setDatas((preValue) => {
      return [...preValue.filter((data, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Header/>
      <Createnote onAdd={addData}/>
      {datas.map((data, index) => (
      <Data
       key={index}
       id={index}
       title={data.title}
       content={data.content}
       onDelete={deleteDatas}/> ))}
      <Count  count={
          datas.length === 0
            ? "Empty"
            : `Showing ${datas.length} Datas in Database`
        }/>
    </div>
  );
}

export default App;
