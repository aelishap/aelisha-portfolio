import profileImage from '../../images/profile.jpeg';

const AboutMeBio = () => {

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p
					className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
				>
					Full-stack developer with 3+ years of experience in building scalable B2B and SaaS platforms using React.js, Next.js, Node.js, and MongoDB.
					<br /><br />
					Specialized in B2B and SaaS platforms with strong focus on clean architecture, secure role-based systems, and payment integrations (Stripe, Razorpay).Built dynamic dashboards, real-time platforms, and admin portals with intuitive UI using Tailwind CSS, Redux Toolkit, and custom APIs.Experienced with headless CMS tools like Directus and Medusa.js for flexible data-driven applications.
					Contributed to projects across e-commerce, gaming, real estate, and packaging domains.
					Collaborated in Agile teams, working closely with designers, QA, and backend developers to ship high-quality products.
					<br /><br />
					Comfortable with tools like Git, Bitbucket, WebStorm, Postman, and continuously exploring DevOps practices (Docker, Netlify).
					Driven by user-centric development, performance optimization, and cross-functional team collaboration.
				</p>
			</div>
		</div>
	);
};

export default AboutMeBio;
