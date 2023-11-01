import { initializeApp } from "firebase/app";
import { collection, addDoc,getDocs,where, setDoc, getFirestore, query } from "firebase/firestore";
import { UserData } from "../types/userdata";
import { FavoriteData } from "../types/favorite";
import { PostData } from "../types/post";
import { firebaseConfig } from "../service/firebaseConfig";
import { Comments } from "../components/export";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


 const userCollection = collection(db, "user")
 const postCollection = collection(db, "post");

// Recupera los datos del usuario de Firebase 
 export async function getUserData() {
  const querySnapshot = await getDocs(userCollection);
  const userData: UserData[] = [];
  querySnapshot.forEach((doc) => {
    const user = doc.data() as UserData;
    // Accede al ID del documento
    const userId = doc.id;
    
    userData.push({ ...user, id: userId });
  });
  return userData;
}
// Recupera los datos del post de Firebase 
 export async function getPostData(): Promise<PostData[]> {
  const querySnapshot = await getDocs(postCollection);
  const postData: PostData[] = [];
  querySnapshot.forEach((doc) => {
    const post = doc.data() as PostData;
    postData.push(post);
  });
  return postData;
}
export const addComment = async (comments:any) => {
  try {
    const commentData = collection (db, "comments");
    await addDoc(commentData,comments);
    console.log("Se añadio un comentario")
    
  } catch (error) {
    console.error(error);
    
  }
}
export const getComment = async () => {

    const querySnapshot =  await getDocs (collection(db, "comments"));
    const commented :any  = [];

    querySnapshot.forEach((doc) => {
      const comment = doc.data();
      commented.push({
        id:doc.id,
        ...comment
      });
    })
    return commented
  }


  export async function getPostsByArtistId(artistId: string): Promise<PostData[]> {
    const q = query(postCollection, where("userId", "==", artistId));
    const querySnapshot = await getDocs(q);
    const artistPosts: PostData[] = [];
  
    querySnapshot.forEach((doc) => {
      const post = doc.data() as PostData;
      artistPosts.push(post);
    });
  
    return artistPosts;
  }

export default {
 
  getUserData,
  getPostData,
  getComment,
  addComment,
  getPostsByArtistId
}
