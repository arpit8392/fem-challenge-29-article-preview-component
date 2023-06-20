'use client'

import ShareButton from '@/components/ShareButton'
import Illustration from '@/components/Illustration'
import Owner from '@/components/Owner'
import Content from '@/components/Content'
import useModalStore from '@/store/ModalStore'
import ShareModal from '@/components/ShareModal'
import clsx from 'clsx'

export default function Home() {
	const [isOpen, openModal] = useModalStore((state) => [
		state.isOpen,
		state.openModal,
	])
	return (
		<main className='px-6 py-20 grid min-h-screen place-content-center'>
			<section className='flex flex-col md:flex-row md:items-center shadow-2xl rounded-xl overflow-hidden bg-white max-w-3xl'>
				<Illustration />
				<div className='relative px-8 py-9 md:px-10 md:py-8 flex flex-col gap-8 md:gap-5'>
					<Content />
					<div
						className={clsx(
							'flex justify-between items-center ',
							isOpen && 'hidden md:flex'
						)}>
						<Owner />
						<ShareButton onClick={openModal} />
					</div>
				</div>
				{isOpen && <ShareModal />}
			</section>
		</main>
	)
}
