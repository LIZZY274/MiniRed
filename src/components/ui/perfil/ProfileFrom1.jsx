import React, { useState } from "react";
import "./ProfileForm.css";
import { Link } from "react-router-dom";
const ProfileForm1 = () => {
  const [formState, setFormState] = useState({
    idStudent: "32165461",
    phone: "123 456 7890",
    subjects: "",
    hobbies: "Películas / Series",
    instagram: "",
    facebook: "",
    twitter: "",
    about: "",
    address: {
      street: "Calle Cárcamos 123",
      city: "Arbide",
      state: "Chiapas",
      zipCode: "12345",
      country: "México",
    },
    multimediaFile: null, 
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      address: { ...prevState.address, [name]: value },
    }));
  };
  const handleMultimediaChange = (e) => {
    const file = e.target.files[0];
    setFormState((prevState) => ({
      ...prevState,
      multimediaFile: file,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // Aquí puedes enviar los datos a tu backend o realizar cualquier otra acción
  };
  return (
    <div className="profile-form-container">
      <h2>Completa tu perfil</h2>
      <p>
        ¡Personaliza tu experiencia! Completa tu perfil para conectarte mejor
        con la comunidad.
      </p>
      <h3>Nombre</h3>
      <input
        className="input-one"
        type="text"
        name="carreraStudent"
        value={formState.carreraStudent}
        onChange={handleChange}
      />
      <h3>Correo</h3>
      <input
        className="input-one"
        type="text"
        name="carreraStudent"
        value={formState.carreraStudent}
        onChange={handleChange}
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <h3>ID Estudiante</h3>
        <input
          className="input-one"
          type="text"
          name="idStudent"
          value={formState.idStudent}
          onChange={handleChange}
        />
        {/* ... Existing form fields */}
        <h3>Telefono</h3>
        <input
          className="input-one"
          type="text"
          name="idStudent"
          value={formState.idStudent}
          onChange={handleChange}
        />
        <div className="containerFormulario">
          <h3>Intereses</h3>
          <input
            className="input-one"
            type="text"
            name="carreraStudent"
            value={formState.carreraStudent}
            onChange={handleChange}
          />
          {/* Código de los intereses */}
        </div>
        <div className="containerFormulario">
          <h3>Redes Sociales</h3>
          <input
            className="input-one"
            type="text"
            name="carreraStudent"
            value={formState.carreraStudent}
            onChange={handleChange}
          />
          <input
            className="input-one"
            type="text"
            name="carreraStudent"
            value={formState.carreraStudent}
            onChange={handleChange}
          />
          <input
            className="input-one"
            type="text"
            name="carreraStudent"
            value={formState.carreraStudent}
            onChange={handleChange}
          />
          {/* Código de las redes sociales */}
          <h3>Acerca de mí</h3>
          <textarea
            className="input-2"
            name="about"
            value={formState.about}
            onChange={handleChange}
          ></textarea>
        </div>
        <h3>Seleccionar Archivos</h3>
        <div className="file-container">
          <input
            type="file"
            name="multimediaFile"
            accept="image/*, audio/*, video/*"
            onChange={handleMultimediaChange}
          />
        </div>
        {/* ... Existing form fields */}
        <h3>Datos de Ubicación</h3>
        <div className="address-container">
          <div className="address-container">
            <div className="profile-form">
              <label>
                Calle
                <input
                  type="text"
                  name="street"
                  value={formState.address.street}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                Colonia
                <input
                  type="text"
                  name="city"
                  value={formState.address.city}
                  onChange={handleAddressChange}
                />
              </label>
            </div>
            <div className="profile-form">
              <label>
                No. Int.
                <input
                  type="text"
                  name="zipCode"
                  value={formState.address.zipCode}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                C.P.
                <input
                  type="text"
                  name="zipCode"
                  value={formState.address.zipCode}
                  onChange={handleAddressChange}
                />
              </label>
              <label>
                Estado
                <input
                  type="text"
                  name="state"
                  value={formState.address.state}
                  onChange={handleAddressChange}
                />
              </label>
            </div>
            <div className="profile-form">
              <label>
                País
                <input
                  type="text"
                  name="country"
                  value={formState.address.country}
                  onChange={handleAddressChange}
                />
              </label>
            </div>
          </div>
        </div>
        <Link to="/home" className="container-button space-y-4">
          <button className=" w-full bg-green-300 p-1" type="submit">
            Guardar cambios
          </button>
        </Link>
      </form>
      < Link to="/register" className="space-y-6">Registarte aqui</Link>
    </div>
  );
};
export default ProfileForm1;
