import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import imagefinal from './images/final.jpg';

const randomNoRepeats = array => {
	let copy = array.slice(0);
  return () => {
    if (copy.length < 1) { copy = array.slice(0); }
    let index = Math.floor(Math.random() * copy.length);
		let item = copy[index];
    copy.splice(index, 1);
    return item;
  };
};

const images = [
	image1, image2, image3, image4, image5, image6, image7
];

const pickRandomImage = randomNoRepeats(images);

let timeout = null;

const FriendsHugging = () => {

	const history = useHistory();

	const [times, setTimes] = useState(0);

	const [image, setImage] = useState(image1);

	const pickImage = () => {
		setImage(pickRandomImage());
		setTimes(prev => prev + 1);
	};

	useEffect(() => {

		if (times === 50) {
			timeout = setTimeout(() => setImage(imagefinal), 250);
			setTimeout(() => history.push('/landing/signin'), 3000);
		} else {
			timeout = setTimeout(pickImage, 150);
		};

		return () => clearTimeout(timeout);

	});

	return <img src={image} width="100%" />;

};

export { FriendsHugging };