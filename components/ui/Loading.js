const Loading = () => (
    <div className="flex items-center justify-center h-screen bg-black">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-16 w-16"></div>
        <p className="text-2xl font-bold ml-4 text-white">Loading...</p>
    </div>
);

export default Loading;