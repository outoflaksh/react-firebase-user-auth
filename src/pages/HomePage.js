import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  const user = getAuth().currentUser;

  return (
    <div>
      <h4>Hello {user.displayName}, you are at home</h4>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
