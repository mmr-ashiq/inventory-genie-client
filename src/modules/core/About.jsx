import React from 'react';
import supervisorImage from '../../assets/supervisor.jpg';


const people = [
	{
		name: '-Mizanur Rahman Ashiq',
		role: '🧑‍💻Developer',
		imageUrl: 'https://avatars.githubusercontent.com/u/30866225?v=4',
		bio: `I am enthusiastic about Programming and Software Development. Nowadays, I'm mostly working on enhancing user-experience through React js, Next Js etc. For Backend part i use Node js and express js.`,
	},
	{
		name: '-Esraq Humayun',
		role: '🧑‍🏫Supervisor',
		imageUrl: supervisorImage,
		bio: '📨 esraq.swe@diu.edu.bd',
	},
];

export default function Example() {

	return (
		<div className="bg-white">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12">
					<h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
						Meet our{' '}
						<span className="bg-gradient-to-r from-purple-500 via-blue-300 to-teal-200 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 text-purple-500 text-4xl">
							leadership
						</span>
					</h2>

					<ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
						{people.map((person) => (
							<li key={person.name}>
								<div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
									<div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
										<img
											className="object-cover rounded-lg shadow-lg"
											src={person.imageUrl}
											alt=""
										/>
									</div>
									<div className="p-1 rounded-lg bg-slate-100 sm:col-span-2">
										<div className="space-y-4">
											<div className="space-y-1 text-lg font-medium leading-6">
												<h3>{person.name}</h3>
												<p className="text-indigo-600">{person.role}</p>
											</div>
											<div className="p-2 text-sm">
												<p className="text-gray-500">{person.bio}</p>
											</div>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
