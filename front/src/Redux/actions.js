import { GET_ALL_USERS, GET_USER, ADD_USER } from "./action-types";

let users = [
  {
    id: 1,
    nombre: "Ani",
    apellido: "Perez",
    dni: "12345678",
    email: "bKuZp@example.com",
    password: "123456",
  },
  {
    id: 2,
    nombre: "Juan",
    apellido: "Perez",
    dni: "12345678",
    email: "bKuZp@example.com",
    password: "123456",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Perez",
    dni: "12345678",
    email: "bKuZp@example.com",
    password: "123456",
  },
];

export const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
};

export const getUser = (id) => {
  return {
    type: GET_USER,
    payload: users.find((user) => user.id === id),
  };
}

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
}


