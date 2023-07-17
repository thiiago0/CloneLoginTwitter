import { useState } from "react";
import Swal from "sweetalert2";

const usuarios = [
  "Juan",
  "María",
  "Pedro",
  "Ana",
  "Luis",
  "Laura",
  "Carlos",
  "Sofía",
  "Diego",
  "Valentina",
  "Andrés",
  "Camila",
  "Fernando",
  "Isabella",
  "Roberto",
  "Gabriela",
  "Miguel",
  "Lucía",
  "Javier",
  "Paula",
];

export const useFindUser = (userName) => {
  const [isloged, setIsloged] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const handleChangeInput = (e) => {
    setValueInput(e.target.value);
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    if (usuarios.find((usuario) => usuario === valueInput)) {
      Swal.fire({
        title: "success!",
        text: "user correct",
        icon: "success",
        confirmButtonText: "go to home",
      });
      setValueInput("");
      setIsloged(true);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Usuario no existe",
        icon: "error",
        confirmButtonText: "cool",
      });
      setValueInput("");
    }
  };

  return {
    isloged,
    valueInput,
    handleChangeInput,
    handleClickLogin,
  };
};
