const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-24 border py-5 px-5 bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
