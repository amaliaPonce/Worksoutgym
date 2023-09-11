import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import UpdateUserComponent from "../users/UpdateUserComponent";
import UpdateUserRole from "../users/UpdateUserRole";
import Button from "../Button";

function UserProfile() {
  const { user } = useContext(AppContext);

  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [isUserRoleFormVisible, setIsUserRoleFormVisible] = useState(false);

  const handleToggleEditProfile = () => {
    setIsEditProfileVisible(!isEditProfileVisible);
  };

  const handleToggleUserRoleForm = () => {
    setIsUserRoleFormVisible(!isUserRoleFormVisible);
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <Button handleClick={handleToggleEditProfile}>Editar Perfil</Button>
      {isEditProfileVisible && <UpdateUserComponent />}

      {user?.userRole === "admin" && (
        <div>
          <h3>Cambiar Rol</h3>
          <buttButtonon handleClick={handleToggleUserRoleForm}>
            Cambiar Rol
          </buttButtonon>
        </div>
      )}

      {isUserRoleFormVisible && (
        <UpdateUserRole userId={user.userId} userRole={user.userRole} />
      )}
    </div>
  );
}

export default UserProfile;
