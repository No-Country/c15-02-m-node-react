const UserInfo = ({ nombre, apellido, dni, email }) => {
  return (
    <div>
      <h3>Nombre completo: {nombre} {apellido}</h3>
      <p>DNI: {dni}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
