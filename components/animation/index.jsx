'use client';
import dynamic from 'next/dynamic';


const SlideInOnScroll = dynamic(() => import('@/app/ui/animation/animation'), { ssr: false });

export { SlideInOnScroll };