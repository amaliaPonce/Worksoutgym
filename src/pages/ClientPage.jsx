import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import ExerciseListComponent from "../components/users/ExerciseListComponent";

function ClientPage() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>ClientPage</h2>
      {user.role === "cliente" && (
        
          <ExerciseListComponent />
        
      )}
    </div>
  );
}

export default ClientPage;
