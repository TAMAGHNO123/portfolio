import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('tamaghnog@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className='c-space my-20'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {/* First row: Introduction, Tech Stack, Remote Work side by side */}
                <div className='col-span-1 xl:row-span-1 order-1'>
                    <div className='grid-container'>
                        <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[180px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I am Tamaghno</p>
                            <p className='grid-subtext'>As an individual I design and optimize websites and develop scalable, user-friendly applications...eager to collaborate and contribute.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-1 order-2'>
                    <div className='grid-container'>
                        <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:h-[180px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I have experience working with a range of technologies including React, Node.js, Express, MongoDB, and more.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-1 order-3'>
                    <div className='grid-container'>
                        <div>
                            <p className='grid-headtext'>I work remotely</p>
                            <p className='grid-subtext'>I'm based in India with remote work available across most timezones.</p>
                            <Button name={'Contact Me'} isBeam containerClass='w-full mt-4'/>
                        </div>
                    </div>
                </div>

                {/* Second row: Coding Passion and Contact */}
                <div className='xl:col-span-2 xl:row-span-1 order-4'>
                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[180px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My passion for coding</p>
                            <p className='grid-subtext'>I love solving problems and building things through code</p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-1 order-5'>
                    <div className='grid-container'>
                        <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[120px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy' />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                    tamaghnog@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;