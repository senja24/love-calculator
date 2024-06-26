import { Metadata } from 'next';

const title = 'Love Calculator - Jajan Digital';
const description = 'Cek Love Online Developed by Jajan Digital';

export const generateMetadata = async (): Promise<Metadata> => {

    return {
        appleWebApp: {
            statusBarStyle: 'black-translucent',
            title,
        },
        description: description,
        metadataBase: new URL('https://love.khodam.biz.id'),
        openGraph: {
            description: description,
            images: [
                {
                    alt: title,
                    height: 360,
                    url: '/love-calc.png',
                    width: 480,
                },
                {
                    alt: title,
                    height: 720,
                    url: '/love-calc.png',
                    width: 960,
                },
            ],
            locale: 'en-US',
            siteName: title,
            title: title,
            type: 'website',
            url: 'https://love.khodam.biz.id',
        },
        title: {
            default: title,
            template: '%s · Cek Khodam',
        },
        twitter: {
            card: 'summary_large_image',
            description: description,
            images: [
                '/love-calc.png',
            ],
            site: '@ikaagussetiawan',
            title: title,
        },
    };
};