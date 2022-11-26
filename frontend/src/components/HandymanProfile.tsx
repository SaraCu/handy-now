import { useNavigate } from 'react-router-dom';
import map from '../assets/belgrade.png';

export default function HandymanProfile() {
    const navigate = useNavigate();

    const startChat = () => {
        navigate('/chat');
    }

    return (
        <div className="bg-[#f5f1ff] w-screen h-screen pl-96 pt-12 flex justify-center">
            <div>
            <h1 className="text-black font-josephinbold">
                Marc Power
            </h1>

            <h2 className="text-black font-josephinbold pl-8 text-3xl">4/5</h2>

            <p className='font-josephinbold text-2xl pl-8 w-1/3 pt-10'>
                Installs and repairs electrical wiring, systems, and fixtures in buildings.
                Installs conduits and pipes to house electrical wires and cables.
            </p>

            <div>
                <p className="text-black font-josephinbold pl-8 text-2xl pt-10">Address:</p>
                <p className="text-black font-josephinbold pl-8 text-3xl">Ive Andrica 5</p>
            </div>
            <button 
                className='font-josephinBold w-full text-2xl bg-purple-400 mt-10 py-6 cursor-pointer'
                onClick={startChat}
            >
                CHAT NOW
            </button>
            </div>

            <div className='relative right-96'>
            <div>
                <p className='font-josephinclassic text-xl'>Open in maps:</p>
                <img src={map} alt='map' />
            </div>
            </div>
            
        </div>

    )
}