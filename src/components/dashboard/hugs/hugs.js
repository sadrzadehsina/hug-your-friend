import { useEffect, useState } from 'react';
import axios from 'axios';
import { HugsView } from './view';

const Hugs = () => {

	const [open, setOpen] = useState(false);

	const heartClick = () => setOpen(true);

	const handleClose = () => {
    setOpen(false);
  };

	return <HugsView open={open} heartClick={heartClick} handleClose={handleClose} />;

};

export { Hugs };