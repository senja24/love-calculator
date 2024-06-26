import { Metadata } from 'next';

const title = 'Cek Khodam Online - Jajan Digital';
const description = 'Cek Khodam Online Developed by Jajan Digital';

export const generateMetadata = async (): Promise<Metadata> => {

    return {
        appleWebApp: {
            statusBarStyle: 'black-translucent',
            title,
        },
        description: description,
        metadataBase: new URL('https://www.khodam.biz.id'),
        openGraph: {
            description: description,
            images: [
                {
                    alt: title,
                    height: 360,
                    url: '/cek-khodam.jpg',
                    width: 480,
                },
                {
                    alt: title,
                    height: 720,
                    url: '/cek-khodam.jpg',
                    width: 960,
                },
            ],
            locale: 'en-US',
            siteName: title,
            title: title,
            type: 'website',
            url: 'https://www.khodam.biz.id',
        },
        title: {
            default: title,
            template: '%s · Cek Khodam',
        },
        twitter: {
            card: 'summary_large_image',
            description: description,
            images: [
                '/cek-khodam.jpg',
            ],
            site: '@ikaagussetiawan',
            title: title,
        },
    };
};