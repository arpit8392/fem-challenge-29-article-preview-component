'use client'

import Illustration from '@/components/Illustration'
import Owner from '@/components/Owner'
import Content from '@/components/Content'
import useModalStore from '@/store/ModalStore'
import clsx from 'clsx'
import ShareDesktopModal from '@/components/ShareDesktopModal'
import ShareMobileModal from '@/components/ShareMobileModal'

export default function Home() {
	const [isOpen, openModal, closeModal] = useModalStore((state) => [
		state.isOpen,
		state.openModal,
		state.closeModal,
	])

	return (
		<main className='px-6 py-20 grid min-h-screen place-content-center'>
			<section className='flex flex-col md:flex-row md:items-center shadow-2xl rounded-xl bg-white max-w-3xl'>
				<Illustration />
				<div className='relative px-8 py-9 md:px-10 md:py-8 flex flex-col gap-8 md:gap-5'>
					<Content />
					<div
						className={clsx(
							'flex justify-between items-center',
							isOpen && 'hidden md:flex'
						)}>
						<Owner />

						<button
							onClick={isOpen ? closeModal : openModal}
							className={clsx(
								'w-8 h-8 rounded-full flex items-center justify-center bg-lightGrayishBlue relative',
								isOpen && 'md:bg-desaturatedDarkBlue'
							)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='15'
								height='13'
								className={clsx(
									isOpen ? 'fill-white' : 'fill-desaturatedDarkBlue'
								)}
								aria-hidden={true}
								focusable={false}>
								<path d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z' />
							</svg>
							<span className='sr-only'>
								{isOpen ? ' Close Modal' : 'Open Modal'}
							</span>
						</button>
						{isOpen && <ShareDesktopModal />}
					</div>
				</div>
				{isOpen && (
					<div className='-mt-5'>
						<ShareMobileModal />
					</div>
				)}
			</section>
		</main>
	)
}
