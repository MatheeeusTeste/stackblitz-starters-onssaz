import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPdfy-IdTkluqPPHSJV08SbXKBd9XEiNQ",
  authDomain: "projeto-onfitness.firebaseapp.com",
  projectId: "projeto-onfitness",
  storageBucket: "projeto-onfitness.appspot.com",
  messagingSenderId: "919518066269",
  appId: "1:919518066269:web:94536acff380874ccfbfb4",
  measurementId: "G-R7KQGNVSV8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}

export function createUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}

export function addItem(colecao: string, document: string, data: unknown) {
  const docRef = doc(db, colecao, document);
  return setDoc(docRef, data);
}

export function updateItem(colecao: string, document: string, data: unknown) {
  const docRef = doc(db, colecao, document);
  return updateDoc(docRef, data);
}

export function deleteItem(colecao: string, document: string) {
  const docRef = doc(db, colecao, document);
  return deleteDoc(docRef);
}

export type filter = {
  field: string;
  operation: string;
  value: unknown;
};

export async function selectAllItems(colecao: string, filter?: filter[]) {
  const wh = filter?.map((f) => where(f.field, f.operation, f.value));
  const q = query(collection(db, colecao), wh);
  console.log('query', wh);
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  const queryResult = [];
  querySnapshot.forEach((doc) => {
    queryResult.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(queryResult);
  return queryResult;
}