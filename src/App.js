import './App.css';
import { Link } from "react-router-dom";
import { AppRoutes } from './Routing/AppRoutes';


function App() {
  return (
    <div>
      <Link to={AppRoutes.COMMENTS}>ЗаLOGINся</Link>
    </div>
  );
}

export default App;
