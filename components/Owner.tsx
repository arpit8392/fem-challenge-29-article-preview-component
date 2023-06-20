import Image from 'next/image'

const Owner = () => {
	return (
		<figure className='flex items-center gap-4'>
			<Image
				src='/images/avatar-michelle.jpg'
				alt='Michelle'
				width={40}
				height={40}
				className='w-auto object-contain rounded-full'
			/>
			<figcaption className='flex flex-col gap-1'>
				<h2 className='font-bold text-sm text-darkGrayishBlue'>
					Michelle Appleton
				</h2>
				<p className='text-grayishBlue text-sm tracking-wide'>28 Jun 2020</p>
			</figcaption>
		</figure>
	)
}
export default Owner
