import { Link } from "react-router-dom";
import { members } from "../Members";
import "./style.css";
const Home = () => {
  return (
    <div className="container">
      <h1>Nomes de pessoas e empresas</h1>
      {members.map((memb) =>
        memb.type === "pj" ? (
          <Link className="links" to={`/company/${memb.id}`}>
            {memb.name}
          </Link>
        ) : (
          <Link className="links" to={`/customer/${memb.id}`}>
            {memb.name}
          </Link>
        )
      )}
    </div>
  );
};
export default Home;
