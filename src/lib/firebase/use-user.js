import { useState, useEffect } from 'react';
import { useAuth } from './use-auth';
import { useFirestore } from './use-firestore';

const useUser = () => {

	const [user, setUser] = useState({});

	const { auth } = useAuth();

	const firestore = useFirestore();

	const getCurrentUserInfo = () => {
		auth.onAuthStateChanged(user => {
			if (user) firestore.collection('users').doc(user.uid).get().then(u => setUser(u.data()));
		});
	};

	useEffect(getCurrentUserInfo, []);

	return user;

};

export { useUser };