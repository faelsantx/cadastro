// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfJE7N0pl6ssedyDOkyfqRJhKyzVuGcXI",
  authDomain: "fire-crud-aula-fael.firebaseapp.com",
  projectId: "fire-crud-aula-fael",
  storageBucket: "fire-crud-aula-fael.appspot.com",
  messagingSenderId: "159653109408",
  appId: "1:159653109408:web:96859161f4349e77ebf3c5",
  measurementId: "G-507BLPLXJQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} nome the title of the Task
 * @param {string} sobrenome the description of the Task
 * @param {int} idade
 * @param {int} CPF the description of the Task
 * @param {string} profissao
 * @param {string} email
 */
export const saveTask = (nome, sobrenome, idade, CPF, profissao,email) =>
  addDoc(collection(db, "tasks"), { nome, sobrenome, idade, CPF, profissao, email});

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));