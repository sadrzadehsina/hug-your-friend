import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {

	const history = useHistory();

	useEffect(() => {

		// const timeout = setTimeout(() => history.push('/account/signin'), 3000);

		// return () => clearTimeout(timeout);

	}, []);

	return <h1>Landing Page</h1>

};

export { Landing };