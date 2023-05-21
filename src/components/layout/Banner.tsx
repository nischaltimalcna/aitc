import Image from 'next/image';
import React from 'react';

export const Banner = () => {
	return (
		<div className="h-[70vh] w-screen relative overflow-hidden">
			<Image alt="Electronics "
                sizes="100%"
                fill
				className=" object-cover object-center"
				src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
			/>
		</div>
	);
};

