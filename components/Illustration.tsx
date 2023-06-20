import Image from 'next/image'

const Illustration = () => {
	return (
		<picture className='md:h-full'>
			<Image
				src='/images/drawers.jpg'
				alt='Drawer Image'
				height={200}
				width={327}
				priority
				className='block md:hidden w-full object-contain'
			/>
			<Image
				src='/images/drawers.jpg'
				alt='Drawer Image'
				height={280}
				width={285}
				priority
				className='hidden md:block h-full object-cover'
			/>
		</picture>
	)
}
export default Illustration
