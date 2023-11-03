import { initializeApp } from "firebase/app";
import { collection, addDoc,getDocs,where, setDoc, getFirestore, query } from "firebase/firestore";
import { UserData } from "../types/userdata";
import { FavoriteData } from "../types/favorite";
import { PostData } from "../types/post";
import { FriendsData } from "../types/friends";
import { firebaseConfig } from "../service/firebaseConfig";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


  const userCollection = collection(db, "user")
  const postCollection = collection(db, "post");
  const friendsCollection = collection(db, "friends");

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

// Función para obtener datos de la colección "friends"
export async function getFriendsData(): Promise<FriendsData[]> {
  const querySnapshot = await getDocs(friendsCollection);
  const friendsData: FriendsData[] = [];

  querySnapshot.forEach((doc) => {
    const friend = doc.data() as FriendsData;
    friendsData.push(friend);
  });

  return friendsData;
}

export async function getFriendsById(userId: string): Promise<FriendsData[]> {
  const q = query(friendsCollection, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const userFriends: FriendsData[] = [];

  querySnapshot.forEach((doc) => {
    const friend = doc.data() as FriendsData;
    userFriends.push(friend);
  });

  return userFriends;
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
  getFriendsData,
  getFriendsById,
  getComment,
  addComment,
  getPostsByArtistId
}