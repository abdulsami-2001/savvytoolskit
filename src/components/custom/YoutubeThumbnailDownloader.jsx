'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';




const YoutubeThumbnailDownloader = () => {
    const [Url, setUrl] = useState('');
    const [MaxResDefault, setMaxResDefault] = useState('');
    const [SdDefault, setSdDefault] = useState('');
    const [HqDefault, setHqDefault] = useState('');
    const [MqDefault, setMqDefault] = useState('');
    const [Default, setDefault] = useState('');


    const handleDownload = () => {
        const regex = /(?<=v=|\/v\/|\/embed\/|youtu.be\/|\/v=|\/embed=|youtu.be=|\/v\/|\/e\/|watch\?v=|v%3D|^youtu.be\/|embed\/|watch\?v=|\?v=)([^#\\&\\?]+).*/;
        const match = Url.match(regex);

        const maxresdefault = `https://i3.ytimg.com/vi/${match && match[1]}/maxresdefault.jpg`;
        const sddefault = `https://i3.ytimg.com/vi/${match && match[1]}/sddefault.jpg`;
        const hqdefault = `https://i3.ytimg.com/vi/${match && match[1]}/hqdefault.jpg`;
        const mqdefault = `https://i3.ytimg.com/vi/${match && match[1]}/mqdefault.jpg`;
        const de_fault = `https://i3.ytimg.com/vi/${match && match[1]}/default.jpg`;


        if (match && match[1]) {
            setMaxResDefault(maxresdefault)
            setSdDefault(sddefault)
            setHqDefault(hqdefault)
            setMqDefault(mqdefault)
            setDefault(de_fault)
        } else {
            alert('Enter Valid YouTube URL')
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen pt-10 pb-10">
            <section className="flex flex-col items-center space-y-5">
                <h1 className="text-2xl font-bold text-center xs:text-3xl s:text-5xl md:text-6xl" >YouTube Thumbnail Downloader</h1>
                <input
                    type="text"
                    value={Url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="form-control block h-10 rounded-sm outline-black xs:w-10/12 placeholder:text-center outline-none placeholder:px-6"
                    placeholder="Enter YouTube URL"
                />
                <Button onClick={handleDownload} >Get Thumbnails</Button>
            </section>

            {MaxResDefault && (
                <>
                    <p className="py-3  text-center px-5 s:text-xl">Maximum Resolution Thumbnail (1280x720 pixels)</p>
                    <Image width={1280} height={720} src={MaxResDefault} alt="Maximum Resolution Thumbnail (1280x720 pixels)" className="img-thumbnail px-5 img-responsive" />
                    <Button className="btn btn-primary mt-3">
                        <Link href={MaxResDefault} target='_blank'> Download Thumbnail</Link>
                    </Button>
                </>
            )}
            {SdDefault && (
                <>
                    <p className="py-3  text-center px-5 s:text-xl">Standard Definition Thumbnail (640x480 pixels)</p>
                    <Image width={1280} height={720} src={SdDefault} alt="Standard Definition Thumbnail (640x480 pixels)" className="img-thumbnail px-5 img-responsive" />
                    <Button className="btn btn-primary mt-3">
                        <Link href={SdDefault} target='_blank'> Download Thumbnail</Link>
                    </Button>
                </>
            )}
            {HqDefault && (
                <>
                    <p className="py-3  text-center px-5 s:text-xl">High Quality Thumbnail (480x360 pixels)</p>
                    <Image width={480} height={360} src={HqDefault} alt="High Quality Thumbnail (480x360 pixels)" className="img-thumbnail px-5 img-responsive" />
                    <Button className="btn btn-primary mt-3">
                        <Link href={HqDefault} target='_blank'> Download Thumbnail</Link>
                    </Button>
                </>
            )}
            {MqDefault && (
                <>
                    <p className="py-3  text-center px-5 s:text-xl">Medium Quality Thumbnail (320x180 pixels)</p>
                    <Image width={320} height={180} src={MqDefault} alt="Medium Quality Thumbnail (320x180 pixels)" className="img-thumbnail px-5 img-responsive" />
                    <Button className="btn btn-primary mt-3">
                        <Link href={MqDefault} target='_blank'> Download Thumbnail</Link>
                    </Button>
                </>
            )}
            {Default && (
                <>
                    <p className="py-3  text-center px-5 s:text-xl">Default Thumbnail (120x90 pixels)</p>
                    <Image width={120} height={90} src={Default} alt="Default Thumbnail (120x90 pixels)" className="img-thumbnail px-5 img-responsive" />
                    <Button className="btn btn-primary mt-3">
                        <Link href={Default} target='_blank'> Download Thumbnail</Link>
                    </Button>
                </>
            )}
        </main>
    );
};

export default YoutubeThumbnailDownloader;
