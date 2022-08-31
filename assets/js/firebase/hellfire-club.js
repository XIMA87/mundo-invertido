import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app) //referencia para o Firestore
    const hellfireClubCollection = collection(db, 'hellfire-club') //referencia para a collection
    const docReference = await addDoc(hellfireClubCollection, subscription) //add documento na collection
    return docReference.id
}