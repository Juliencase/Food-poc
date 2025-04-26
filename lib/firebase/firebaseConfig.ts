// lib/firebase/auth.js
import {
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './connection';

export function onAuthChange(callback: any) {
	return onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
	const provider = new GoogleAuthProvider();
	try {
		await signInWithPopup(auth, provider);
	} catch (error) {
		console.error('Erreur lors de la connexion Google', error);
	}
}

export async function signOutGoogle() {
	try {
		await signOut(auth);
	} catch (error) {
		console.error('Erreur lors de la déconnexion', error);
	}
}
