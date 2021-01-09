import { useEffect, useState } from 'react';
import axios from 'axios';
import { TracksView } from './view';

const Tracks = () => {

	const [open, setOpen] = useState(false);

	const heartClick = () => setOpen(true);

	const handleClose = () => {
    setOpen(false);
  };

	return <TracksView open={open} heartClick={heartClick} handleClose={handleClose} />;

};

export { Tracks };