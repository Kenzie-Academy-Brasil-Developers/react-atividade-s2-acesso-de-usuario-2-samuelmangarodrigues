import { useParams } from "react-router-dom";
import { members } from "../Members";
import { Link } from "react-router-dom";
const Customer = () => {
  const params = useParams();
  console.log(params);
  const member = members.find((memb) => memb.id === params.id);
  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link className="links" to="/">
        Voltar
      </Link>
    </div>
  );
};
export default Customer;
