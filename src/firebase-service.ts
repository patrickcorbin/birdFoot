// import { dismissOverlay } from "@ionic/core/dist/types/utils/overlays";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_KEY,
    authDomain: "my-test-5a29b.firebaseapp.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: "1015377585025",
    appId: "1:1015377585025:web:27bf7d26118aa7c3dafe80",
    measurementId: "G-VMRDZ0NZD8"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const perfDataCol = collection(db, "performanceData")
const artistDataCol = collection(db, "artistData")
const locationDataCol = collection(db, "locationData")

const API = () => {

    // const getCollectionData = async (collection: any) => {
    //     const querySnapshot = await getDocs(collection)
    //     const results = querySnapshot.docs.map((doc: any) => {
    //         return {...doc.data(), id: doc.id}
    //     })
    //     return results
    // }

    const getCollectionData = async (collection: any, sortBy: string) => {
        const q = query(collection, where("active", "==", true), orderBy(sortBy))
        const querySnapshot = await getDocs(q)
        const results = querySnapshot.docs.map((doc: any) => {
            return {...doc.data(), id: doc.id}
        })
        return results
    }

    const getCollectionDoc = async (collection: any, id: string) => {
        const docRef = doc(db, collection, `${id}`)
        const docSnap = await getDoc(docRef)
        return docSnap.data()
        // return {...docSnap.data(), id: docSnap.id}
    }

    return {
        loadPerfData: async () => {
            console.log('firebase loadPerfData')
            return await getCollectionData(perfDataCol, 'dateTime')
        },
        loadPerf: async (id: string) => {
            console.log('firebase loadPerf')
            return await getCollectionDoc(perfDataCol, id)
        },
        loadArtistData: async () => {
            console.log('firebase loadArtistData')
            return await getCollectionData(artistDataCol, 'name')
        },
        loadArtist: async (id: string) => {
            console.log('firebase loadArtist')
            return await getCollectionDoc(artistDataCol, id)
        },
        loadLocationData: async () => {
            console.log('firebase loadLocationData')
            return await getCollectionData(locationDataCol, 'name')
        },
        loadLocation: async (id: string) => {
            console.log('firebase loadLocation')
            return await getCollectionDoc(locationDataCol, id)
        }
    }
}

export default API();