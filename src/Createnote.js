import {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import "./Createnote.css";

function Createnote({onAdd}) {
  const [isExpanded, setExpanded] = useState(false);
  
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleExpanded() {
    setExpanded(true);
  }
  function addButton(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div className="note">
      <form>
      {isExpanded && (
          <input value={note.title} type="text" placeholder='Title' name='Title' onChange={handleChange}/>
      )}
          <p>
          <textarea value={note.content} onClick={handleExpanded} name="content" placeholder='Note' onChange={handleChange} rows={isExpanded ? 3 : 1}>
          </textarea>
          </p>
          <button onClick={addButton}><AddIcon/></button>
      </form>
    </div>
  );
}

export default Createnote;
