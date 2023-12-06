const UserInfo = ({ nombre, apellido, dni, email }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h2>Apellido: {apellido}</h2>
      <p>DNI: {dni}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
