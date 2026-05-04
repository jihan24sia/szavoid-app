export default function ErrorPage({ code, message, image }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            <img src={image} className="w-[400px] mx-auto mb-6" />

            <h1 className="text-8xl font-bold text-gray-800">{code}</h1>

            <p className="text-gray-500 mt-2">{message}</p>

        </div>
    );
}