import { useState } from 'react';
import { HugsView } from './view';

import { useFirestore, useUser } from '@Lib/firebase';

const Hugs = () => {

	const user = useUser();

	const firestore = useFirestore();

	const [loveDialogOpen, setLoveDialogOpen] = useState(false);
	
	const openLoveDialog = () => setLoveDialogOpen(true);
	const closeLoveDialog = () => setLoveDialogOpen(false);

	const saveHugs = users => {
		
		const batch = firestore.batch();

		const whoGive = firestore.collection('users').doc(user.uid);

		users.map(u => {
			const whoTake = firestore.collection('users').doc(u.uid);
			batch.update(whoTake, { hugsEarned: u.hugsEarned + u.hugs });
		});

		const allGiven = users.map(user => user.hugs)[0];

		batch.update(whoGive, { hugsGiven: user.hugsGiven + allGiven, hugsRemained: user.hugsRemained - allGiven });

		batch.commit().then(closeLoveDialog);

	};

	return (
		<HugsView
			user={user}
			loveDialogOpen={loveDialogOpen}
			openLoveDialog={openLoveDialog}
			closeLoveDialog={closeLoveDialog}
			saveHugs={saveHugs}
		/>
	);

};

export { Hugs };