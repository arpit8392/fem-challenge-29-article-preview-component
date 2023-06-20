import { useState } from 'react';

// ...

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main className='px-6 py-20 grid min-h-screen place-content-center'>
      <section className='flex flex-col md:flex-row md:items-center shadow-2xl rounded-xl overflow-hidden bg-white max-w-3xl'>
        <Illustration />
        <div className='relative px-8 py-9 md:px-10 md:py-8 flex flex-col gap-8 md:gap-5'>
          <Content />
          {isOpen ? (
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as='div'
                className='fixed inset-0 flex items-center justify-center z-50'
                onClose={closeModal}
              >
                <div className='bg-black bg-opacity-25 absolute inset-0' />
                <Dialog.Overlay className='fixed inset-0' />

                <Dialog.Content className='bg-darkGrayishBlue px-8 py-6 flex justify-between items-center overflow-hidden rounded-2xl shadow-xl'>
                  <div className='flex gap-5 items-center'>
                    <Dialog.Title className='text-sm tracking-[5px] uppercase text-grayishBlue'>
                      Share
                    </Dialog.Title>
                    <div className='flex gap-4 items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        aria-hidden={true}
                        focusable={false}
                      >
                        {/* ... */}
                      </svg>
                      {/* ... */}
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className='w-8 h-8 rounded-full flex items-center justify-center bg-desaturatedDarkBlue'
                  >
                    {/* ... */}
                  </button>
                </Dialog.Content>
              </Dialog>
            </Transition>
          ) : (
            <div className='flex justify-between items-center'>
              <Owner />
              <ShareButton onClick={openModal} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
