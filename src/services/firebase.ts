import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: 'rafaelmpardim-dtmoney',
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const firebaseDb = getFirestore(app)