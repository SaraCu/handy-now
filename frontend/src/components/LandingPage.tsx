import { useState, useEffect, SetStateAction } from 'react';
import '../styles/LandingPage.css';
import logo from '../assets/app-logo.png';
import heroimage from '../assets/Hero-transparent.png';
import locationicon from '../assets/location-icon.png';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


export default function LandingPage({parentCallback}) {
    const coords: Array<Number> = []
    const [location, setLocation] = useState('');
    const [geolocation, setGeolocation] = useState(coords);
    const [updated, setUpdated] = useState(location);
    const navigate = useNavigate();

    function setGeoLoc():void {
        navigator.geolocation.getCurrentPosition((location)=> {
            setGeolocation([location.coords.longitude, location.coords.latitude]);
        });
        alert('GeoLoc: ' + geolocation);
    }

    function handleLocationValue(event: React.ChangeEvent<HTMLInputElement>) {
        setLocation(event.target.value);
    }

    const handleLocationInput = () => {
        setUpdated(location);
        parentCallback(location);
        navigate('/categories');
    }



    return (
        // LANDING PAGE 
        <div className=' bg-gradient-to-tl from-[#aa8bff] to-[#f5f1ff] h-screen w-screen p-8'>
            <header>
                <img src={logo} alt='logo' className='w-32 h-16' />    
            </header>

            {/* HERO IMAGE AND TEXT */}
            <section className='flex justify-center items-center -mt-24'>
                <img src={heroimage} alt='hero' className='' />
                <div>
                    <h2 className='text-6xl text-black pb-4 font-josephinbold'>The handyman in your hand</h2>
                    <p className='text-4xl font-josephinclassic'>All repairs in one place</p>
                </div>
            </section>

            {/* SEARCH BAR */}
           
            <section className='flex justify-center'>
                <div onClick={handleLocationInput} className='location-icon mr-2 py-1 px-2 bg-[#f5f1ff] rounded-md shadow-md flex items-center cursor-pointer'>
                    <img src={locationicon} alt='location' className='w-8 h-8 rounded-md' />
                </div>
                    <input type='text' id='location-name' onChange={handleLocationValue} value={location} placeholder='Where are you?' className='bg-[#f5f1ff] rounded-md pl-2 w-1/3 h-12 shadow-md'/>
            </section>

            <div className='flex justify-center pt-6'>
                <h3 className='font-bold cursor-pointer' onClick={setGeoLoc}>Use my current location</h3>
            </div>
        </div>
    )
}