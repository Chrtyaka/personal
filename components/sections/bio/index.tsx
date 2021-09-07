import Image from 'next/image';
import avatarPic from '../../../assets/images/avatar.jpg';

export const SectionBio = () => {
	return (
		<section id='bio' className='pt-16 pb-32'>
			<div className='flex w-full pl-64 pr-64'>
				<div className='w-3/12 p-8 rounded-3xl shadow-lg flex flex-col items-center justify-start bg-purple-500'>
					<div className='flex items-center rounded-full border-4 border-white'>
						<Image
							className='rounded-full'
							src={avatarPic}
							alt='Avatar'
							width={270}
							height={270}
						/>
					</div>
					<h2 className='mt-8 font-bold text-2xl text-white'>
						Slava Cherkesov
					</h2>
					<p className='mt-4 text-white'>Frontend Developer | Team Lead</p>
					<a
						href='https://insigne.ru/'
						target='_blank'
						className='mt-4 font-bold text-purple-500 hover:underline'
						rel='noreferrer'
					>
						INSIGNE
					</a>
				</div>

				<div className='w-9/12 pl-32'>
					<h1 className='text-6xl text-purple-500'>
						👋 Hi! I'm Slava Cherkesov
					</h1>
				</div>
			</div>
		</section>
	);
};
