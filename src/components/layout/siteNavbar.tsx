import React from 'react';
import Link from 'next/link';

export const SiteNavbar = () => {
	return (
		<div className="w-full h-36 border-b flex items-center ">
			<div className="max-w-[1280px] w-full flex items-end justify-between mx-auto">
				<h1 className="text-6xl text-secondary  font-NorthdenRough">LOGO</h1>
				<div className="flex gap-5">
					<Link href="#" className="border-bg px-6 py-1">
						<span className="text-2xl font-bold text-bg ">Home</span>
					</Link>
					<Link href="" className="border-bg px-6 py-1">
						<span className="text-2xl font-bold text-bg ">Products</span>
					</Link>
					
				</div>
			</div>
		</div>
	);
};
