import { initializeApp } from "firebase/app";
import { getFirestore, query } from "firebase/firestore";
import { collection, addDoc,getDocs,where } from "firebase/firestore";
import { UserData } from "../types/userdata";
import { PostData } from "../types/post";
import { firebaseConfig } from "./firebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userCollection = collection(db, "user")
const postCollection = collection(db, "post");
// Recupera los datos de Firebase



async function getUserData() {
  const querySnapshot = await getDocs(userCollection);
  const userData: UserData[] = [];
  querySnapshot.forEach((doc) => {
    const user = doc.data() as UserData;
    // Accede al ID del documento
    const userId = doc.id;
    // Ahora puedes utilizar userId junto con los datos del usuario
    userData.push({ ...user, id: userId });
  });
  return userData;
}


async function getPostData(): Promise<PostData[]> {
  const querySnapshot = await getDocs(postCollection);
  const postData: PostData[] = [];
  querySnapshot.forEach((doc) => {
    const post = doc.data() as PostData;
    postData.push(post);
  });
  return postData;
}



export {
  getUserData,
  getPostData
}
