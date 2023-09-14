import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { updateUserService } from "../../service/index";
import UserPostComponent from "./UserPostComponent";
import Button from "../Button";
import { AppContext } from "../../context/AppContext";

function InfoUserComponent(){
    const { user } = useContext(AppContext);
  const { id } = useParams();
  const { userInfo, error, loading } = useUser(id, user?.token);
  const navigate = useNavigate()
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(userInfo[0]);

 
return(
    
    
    
    
    
    )



}
export default InfoUserComponent;