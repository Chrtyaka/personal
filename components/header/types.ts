type NavLinkItem = {
	id: string;
	name: string;
	href: string;
	params?: {
		target: string;
		rel: string;
	};
};

export type { NavLinkItem };
