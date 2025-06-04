import AboutMeBio from '../components/about/AboutMeBio';
import AboutClients from '../components/about/AboutClients';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</>
	);
};

export default About;
