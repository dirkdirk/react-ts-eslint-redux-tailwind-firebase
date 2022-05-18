import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

export const auth = getAuth();
export const db = getDatabase();
export const dbRef = ref(db);
