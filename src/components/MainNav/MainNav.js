import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import './MainNav.scss';

export default function MainNav() {
	const displayNavItems = useMemo(() => {
		const navItems = [
			{
				label: 'Journal',
				href: '/journal'
			},
			{
				label: 'Canvas',
				href: '/canvas'
			},
			{
				label: 'Profile',
				href: '/profile'
			}
		];

		const navLinkState = ({ isActive }) => {
			return isActive ? 'MainNav__link MainNav__link--active' : 'MainNav__link';
		};

		return navItems.map((navItem) => (
			<li key={uniqid()} className="MainNav__item">
				<NavLink className={navLinkState} to={navItem.href}>
					{navItem.label}
				</NavLink>
				<div className="MainNav__underline"></div>
			</li>
		));
	}, []);

	return (
		<nav className="MainNav">
			<ul className="MainNav__list">{displayNavItems}</ul>
		</nav>
	);
}
