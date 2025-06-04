import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
	FiPhone,
	FiMail,
	FiHome,
} from 'react-icons/fi';
import UseScrollToTop from '../../hooks/useScrollToTop';

const socialLinks = [
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/aelishap',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/aelisha-patel-a82469210',
	},
];

const AppFooter = () => {
	return (

		<footer className="w-full border-t border-gray-300 dark:border-gray-700 container mx-auto">
			<div className="mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
				{/* Left: Contact Info */}
				<div className="text-center md:text-left">
					<p className="text-base font-medium flex flex-row gap-2 items-center justify-start mb-2 text-ternary-dark dark:text-primary-light"><span className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300"><FiPhone/></span> +91 98765 43210</p>
					<p className="text-base font-medium flex flex-row gap-2 items-center justify-start mb-2 text-ternary-dark dark:text-primary-light"><span className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300"><FiMail/></span> aelisha@example.com</p>
					<p className="text-base font-medium flex flex-row gap-2 items-center justify-start text-ternary-dark dark:text-primary-light"><span className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300"><FiHome/></span>Meera heights, Althan,Surat</p>
				</div>
				{/* Right: Social Icons */}
				<div className="flex space-x-4" style={{ gap: "15px" }}>
					<ul className="flex gap-2 sm:gap-4">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300"
							>
								<i className="text-lg sm:xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
			</div>
			<UseScrollToTop />

			{/* Bottom: Copyright */}
			<div className="text-center text-sm py-4 border-t border-gray-200 dark:border-gray-700 text-ternary-dark dark:text-primary-light">
				&copy; {new Date().getFullYear()} Aelisha's Portfolio. All rights reserved.
			</div>
		</footer>
	);
};

export default AppFooter;
