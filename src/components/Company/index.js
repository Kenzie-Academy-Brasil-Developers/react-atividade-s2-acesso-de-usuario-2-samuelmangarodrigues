import { Link, useParams } from "react-router-dom";
import { members } from "../Members";
const Company = () => {
  const params = useParams();
  const member = members.find((memb) => memb.id === params.id);
  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome: {member && member.name}</p>

      <Link className="links" to="/">
        Voltar
      </Link>
    </div>
  );
};
export default Company;
