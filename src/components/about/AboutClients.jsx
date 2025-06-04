import AboutClientSingle from './AboutClientSingle';
import { technologiesData } from '../../data/technologyData';
import { technologiesHeading } from '../../data/technologyData';

const AboutClients = () => {
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{technologiesHeading}
			</p>
			<div className="flex mt-10 gap-4 justify-center">
				{technologiesData.slice(0,6).map((tech) => (
					<AboutClientSingle
						title={tech.title}
						image={tech.img}
						key={tech.id}
					/>
				))}
			</div>
			<div className="flex mt-4 gap-4 justify-center">
				{technologiesData.slice(6,12).map((tech) => (
					<AboutClientSingle
						title={tech.title}
						image={tech.img}
						key={tech.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
