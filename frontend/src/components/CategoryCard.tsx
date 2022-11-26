import { useNavigate } from "react-router-dom"

export default function CategoryCard({logo, name, location}) {
    const navigate = useNavigate();

    const chooseCategory = () => {
        navigate(`/category`);
    }

    return (
        <div 
            className='border-solid border-black shadow-2xl w-fit py-4 px-12 m-2'
            onClick={chooseCategory}
        >
            <img src={logo} alt={name} className='' />
            <h2 className='font-josephinbold text-center pt-5 text-2xl'>{name}</h2>
        </div>
    )
}