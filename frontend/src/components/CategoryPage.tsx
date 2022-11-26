import searchicon from '../assets/search-icon.png';
import handymen from '../../public/handymen.json';
import { useNavigate } from 'react-router-dom';

export default function CategoryPage({location, category}) {
    const navigate = useNavigate();

    const seeProfile = () => {
        navigate('/profile');
    }

    return (
        <div className="bg-gradient-to-tl from-[#aa8bff] to-[#f5f1ff] h-screen w-screen p-8">
            <h1 className="text-black font-josephinbold">{category} in {location}</h1>
            <main>
            <div>
            <section className='flex pl-8 pt-8'>
                <div className='location-icon mr-2 py-1 px-2 bg-[#f5f1ff] rounded-md shadow-md flex items-center cursor-pointer'>
                    <img src={searchicon} alt='location' className='w-8 h-8 rounded-md' />
                </div>
                    <input type='text' id='location-name' value={location} placeholder='Where are you?' className='bg-[#f5f1ff] rounded-md pl-2 w-1/3 h-12 shadow-md'/>
            </section>

            <section className='pl-8'>
            {handymen.map(person => {
                return (
                    <div 
                        className=' my-8 p-2 pl-4 w-1/3 bg-[#f5f1ff] shadow-xl cursor-pointer'
                        onClick={seeProfile}
                    >
                        <h2 className='font-black text-3xl font-josephinbold'>{person.name}</h2>
                        <p className='font-josephinclassic text-xl'>{person.address}</p>
                        <p>{person.rating}/5</p>
                    </div>
                )
            })}
            </section>    
            </div>
            </main>
        </div>
    )
}