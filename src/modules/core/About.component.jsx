import React from 'react';
import supervisorImage from '../../assets/supervisor.jpg';

const people = [
    {
        name: 'Mizanur Rahman Ashiq',
        role: 'Developer',
        imageUrl: 'https://avatars.githubusercontent.com/u/30866225?v=4',
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    },
    {
        name: 'Esraq Humayun',
        role: 'Supervisor',
        imageUrl: supervisorImage,
        bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    },
];

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>

                    <ul
                        role="list"
                        className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                                    <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                                        <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <div className="space-y-4">
                                            <div className="space-y-1 text-lg font-medium leading-6">
                                                <h3>{person.name}</h3>
                                                <p className="text-indigo-600">{person.role}</p>
                                            </div>
                                            <div className="text-lg">
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
