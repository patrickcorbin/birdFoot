import { dismissOverlay } from "@ionic/core/dist/types/utils/overlays";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "my-test-5a29b.firebaseapp.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: "1015377585025",
    appId: "1:1015377585025:web:27bf7d26118aa7c3dafe80",
    measurementId: "G-VMRDZ0NZD8"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const perfDataFB = collection(db, "performanceData")

export const API = () => {

    const getCollectionData = async (collection: any) => {
        const querySnapshot = await collection.get()
        const results = querySnapshot.docs.map((doc: any) => {
            return {...doc.data(), id: doc.id}
        })
        return results
    }

    const getCollectionDoc = async (collection: any, id: string) => {
        const doc = await collection.doc(id).get()
        return {...doc.data(), id: doc.id}
    }

    return {
        loadPerfData: async () => {
            console.log('firebase loadPerfData')
            return await getCollectionData(perfDataFB)
        },
        loadPerf: async (id: string) => {
            console.log('firebase loadPerf')
            return await getCollectionDoc(perfDataFB, id)
        }
    }
}
