import React from "react";

const Main = () => {
    return (
        <div className="flex justify-between flex-col md:flex-row gap-10 items-center">
            <div className="max-w-lg flex flex-col gap-4">
                <h1 className="text-3xl font-bold">About Us</h1>
                <p className="text-lg">
                    Codejs comapny and culture are a lot like our product.
                    They're crafted, not cabbled, for delightful experience.
                </p>
            </div>
            <img
                className="md:max-w-sm"
                src="/images/about/main.webp"
            />
        </div>
    );
}

export default Main;