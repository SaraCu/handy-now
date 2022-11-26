import chaticon from '../assets/chat-icon.png'

export default function Chat() {
    return (
        <div className="bg-purple-500 h-screen w-screen p-8">
            <h1 className="text-black font-josephinbold text-center">Marc Power</h1>
            <div className="bg-gradient-to-tl from-[#aa8bff] to-[#f5f1ff] rounded-xl h-5/6 p-10">
                <div>
                <p className="font-josephinbold">Me:</p> <div className="rounded-xl p-8 font-josephinclassic relative full w-fit bg-purple-500">
                    <p>Hello! Do you happen to be near Slavija? My refrigerator made a mess this morning and I need an electrician to fix it.</p>
                </div>
                <p className="font-josephinbold pt-4">Them:</p> <div className="rounded-xl p-8 font-josephinclassic relative full w-fit bg-[#f5f1ff]">
                    <p>Hi! Yes, of course. I'm actually headed there right now anyway. I'll be there in about 20 minutes.</p>
                </div>
                <p className="font-josephinbold pt-4">Me:</p> <div className="rounded-xl p-8 font-josephinclassic relative full w-fit bg-purple-500">
                    <p>Great! My address is: Makenzijeva 10, apt. 4.</p>
                </div>
                <p className="font-josephinbold pt-4">Them:</p> <div className="rounded-xl p-8 font-josephinclassic relative full w-fit bg-[#f5f1ff]">
                    <p>Noted. I'll be there in about 20 minutes.</p>
                </div>
                </div>
            </div>

            <section className='flex pt-6'>
                <div className=' mr-2 py-1 px-2 bg-[#f5f1ff] rounded-md shadow-md flex items-center cursor-pointer'>
                    <img src={chaticon} alt='location' className='w-8 h-8 rounded-md' />
                </div>
                    <input type='text' id='location-name'  placeholder='New Message' className='bg-[#f5f1ff] rounded-md pl-2 w-full h-12 shadow-md'/>
            </section>
        </div>
    )
}