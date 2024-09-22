'use client'
const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-red-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-full h-full rounded-full border-4 border-red-500 animate-pulse opacity-30"></div>
                <div className="absolute inset-0 w-full h-full rounded-full border-4 border-red-600 animate-ping opacity-20"></div>
                <div className="absolute inset-0 w-full h-full rounded-full border-4 border-red-700 animate-bounce opacity-10"></div>
            </div>
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                @keyframes ping {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(2); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Loader;
