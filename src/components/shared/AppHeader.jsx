import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { motion } from 'framer-motion';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	const toggleMenu = () => setShowMenu(prev => !prev);

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto px-4 py-6"
		>
			<div className="max-w-screen-xl mx-auto flex items-center justify-between">
				{/* Logo */}
				<Link to="/">
					<h1 className="text-2xl font-medium text-ternary-dark dark:text-primary-light">PORTFOLIO</h1>
				</Link>

				{/* Right side */}
				<div className="flex items-center justify-center"  style={{gap:'12px'}}>
					{/* Nav links (hidden on small screens) */}
					<div className="hidden sm:flex space-x-6">
						<Link to="/projects"
							className="text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2">
							Projects
						</Link>
						<Link to="/about" className="text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2">
							About Me
						</Link>
						<Link to="/contact" className="text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2">
							Contact
						</Link>
					</div>

					{/* Hamburger menu (only small screens) */}
					<div className="sm:hidden flex items-center justify-center">
						<button
							onClick={toggleMenu}
							type="button"
							aria-label="Menu Toggle"
							className="text-ternary-dark dark:text-ternary-light"
						>
							{showMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
						</button>
					</div>
					{/* Theme Switcher */}
					<div
						onClick={() => setTheme(activeTheme)}
						className="bg-primary-light dark:bg-ternary-dark p-2 rounded-xl cursor-pointer"
						aria-label="Theme Switcher"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark dark:text-ternary-light text-xl" />
						) : (
							<FiSun className="text-gray-700 text-xl" />
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{showMenu && (
				<div className="sm:hidden mt-4 px-2 space-y-4">
					<Link to="/projects" className="block text-lg text-primary-dark dark:text-ternary-light mb-2 font-medium">Projects</Link>
					<Link to="/about" className="block text-lg text-primary-dark dark:text-ternary-light mb-2 font-medium">About Me</Link>
					<Link to="/contact" className="block text-lg text-primary-dark dark:text-ternary-light mb-2 font-medium">Contact</Link>
				</div>
			)}
		</motion.nav>
	);
};

export default AppHeader;
