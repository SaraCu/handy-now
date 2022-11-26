import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import categories from '../../public/categories.json';
import CategoryCard from './CategoryCard';

export default function Categories({location, parentCallBack}) {
    const navigate = useNavigate();
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleCategory = (category: string, logo: string) => {
        setCategory(category);
        setImage(logo);
        parentCallBack(category);
    }    

    return (
        <div className="bg-gradient-to-tl from-[#aa8bff] to-[#f5f1ff] h-screen w-screen p-8">
            <h2 className='text-5xl text-black pb-2 pt-8 font-josephinbold'>Categories</h2>
            <p className='text-3xl pb-16'>Select a handyman category in location: {location}</p>

            <section className='flex justify-center items-center'>
                {categories.map(category => {
                    return (
                        <div onClick={() => {handleCategory(category.category, category.logo); navigate(`/category`);}}>
                            <CategoryCard location={location} logo={category.logo} name={category.category} />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}