import "./Data.css";
import DeleteIcon from '@mui/icons-material/Delete';

function Data({title, content, onDelete,id}) {
    return(
        <div className="data">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>
        <DeleteIcon/>
      </button>
        </div>
    );
}
export default Data;