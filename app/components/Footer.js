"use client";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Component() {
    return (
        <Footer container className="grid gap-5 bg-[#ADD8E6] border-2 py-5 px-5 5px sticky border-primary-800 z-10">
            <Footer.Icon href="https://www.instagram.com/snoopygrams/reels/" icon={BsInstagram}/>
            <Footer.Icon href="https://www.facebook.com/Snoopy/" icon={BsFacebook}/>
            <Footer.Icon href="https://twitter.com/snoopy?lang=en" icon={BsTwitter}/>
            <Footer.Icon href="https://github.com/shrimann23/final-autumn" icon={BsGithub}/>
            <Footer.Copyright href="#" by="Peanuts " year="2023 "/>
        </Footer>
    );
}