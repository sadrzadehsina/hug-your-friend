import { useState } from 'react';
import { HugsView } from './view';

const Hugs = () => {

	const [loveDialogOpen, setLoveDialogOpen] = useState(false);
	
	const openLoveDialog = () => setLoveDialogOpen(true);
	const closeLoveDialog = () => setLoveDialogOpen(false);

	return (
		<HugsView
			loveDialogOpen={loveDialogOpen}
			openLoveDialog={openLoveDialog}
			closeLoveDialog={closeLoveDialog}
		/>
	);

};

export { Hugs };