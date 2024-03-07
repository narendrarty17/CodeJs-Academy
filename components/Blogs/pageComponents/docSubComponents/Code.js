const Code = ({ code }) => {
    return (
        <div>
            <div className='rounded-t-md px-5 py-2 max-w-[768px] lg:max-w-[900px] bg-gray-700 text-gray-200 font-bold'>
                Code
            </div>
            <div className='rounded-b-md px-5 py-2 max-w-[768px] lg:max-w-[900px] text-white bg-gray-500'>
                {code}
            </div>
        </div>
    );
}

export default Code;