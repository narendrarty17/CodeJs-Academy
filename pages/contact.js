import React from 'react';

// importing utils components
import Header from '@/components/utils/Header';
import Footer from '@/components/utils/Footer';

const ContactPage = () => {

    return (
        <div>
            <Header />
            <div className="text-center mt-40 space-y-6 mb-80 bg-gray-900">
                <div className="space-y-4">
                    <h1 className="font-bold text-2xl">
                        Contact us
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <span>
                            Feel free to contact us:-
                        </span>
                        <span>
                            <b>Email</b>:<br /> <i>"narendrarty17@gmail.com"</i>.
                        </span>
                        <span>
                            <b>Join the discord community</b>:<br /> <i>"discord@narendra.dis"</i>
                        </span>
                        <span>
                            <b>Join us in whatsapp</b>:<br /> <i>"whatsapp.ca/23434/narendra"</i>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
