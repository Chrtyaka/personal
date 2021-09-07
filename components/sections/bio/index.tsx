import Image from 'next/image';
import avatarPic from '../../../assets/images/avatar.jpg';
import { IconLinkedIn } from 'components/icons/linkedin';

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
						className='mt-4 pt-2 pb-2 pl-4 pr-4 rounded-3xl shadow-lg bg-white'
						rel='noreferrer'
					>
						<span className='text-purple-500'>Insigne</span>
					</a>
				</div>

				<div className='w-9/12 pl-32'>
					<h1 className='text-6xl text-purple-500'>
						👋 Hi! I'm Slava Cherkesov
					</h1>
					<p className='mt-8 text-2xl'>
						I'm 24 y.o Frontend Developer / Team Lead at Insigne.
					</p>
				</div>
			</div>
		</section>
	);
};
