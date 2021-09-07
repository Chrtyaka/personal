import Image from 'next/image';
import avatarPic from '../../../assets/images/avatar.jpg';

export const SectionBio = () => {
	return (
		<section id='bio' className='pt-16 pb-32'>
			<div className='flex w-full pl-64 pr-64'>
				<div className='w-4/12 flex flex-col items-center justify-start'>
					<Image
						className='rounded-full'
						src={avatarPic}
						alt='Avatar'
						width={270}
						height={270}
					/>
					<h2 className='mt-8 font-bold text-2xl'>Slava Cherkesov</h2>
					<p className='mt-4 text-gray-500'>Frontend Developer | Team Lead</p>
					<a
						href='https://insigne.ru/'
						target='_blank'
						className='mt-4 font-bold text-purple-500 hover:underline'
						rel='noreferrer'
					>
						INSIGNE
					</a>
				</div>

				<div className='w-8/12'>content 2</div>
			</div>
		</section>
	);
};
