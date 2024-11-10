import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// image import
import brandLogo from "../../assets/corporation-logo 1.png";



// fontawsome icon
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container/Container';

const Navbar = () => {
    // menu item array
    const listItem = [
        {
            item : ["Home", "About", "Services", "Resouces", "Projects"],
            angelIcon : faAngleDown
        }
       
    ];

    // Effective navbar

    const [navbarbg, setNavbarbg] = useState(false);
    const [navbarTop, setNabarTop] = useState(false);

   

    useEffect(() =>{
        const handelscroll = ()=>{
            if( window.scrollY > 50){
             setNavbarbg(true);
             setNabarTop(true)
            }
            else{
                setNavbarbg(false)
                setNabarTop(false)
            }
         }

         window.addEventListener('scroll', handelscroll);
       return ()=>  window.removeEventListener('scroll', handelscroll);
     
    },[]);

    
  return (
    <nav className={`fixed  w-full  top-0 py-3  transition-all z-[999] ${
        navbarbg ?' bg-blue-600'  : 'bg-transparent '
    } ${navbarTop ? 'mt-0' : 'mt-8'}`}>
        <Container>
        <div className='flex items-center'>
        <div className="logo w-1/5">
        <img src={brandLogo} alt="brand_logo" />
        </div>
        <div className="menu w-4/5 flex justify-end  text-white">
            <ul className='flex items-center '>
                {listItem.map((listItem) =>(
                    listItem.item.map((item, index)=>(
                        <li className='pr-12 font-plusJakarta font-semibold text-base' key={index}><a href="#">{item} { index !== listItem.item.length-1 && <span><FontAwesomeIcon icon = {listItem.angelIcon}/></span>  }</a></li>
                    ))
                ))}
            </ul>

            <div className="btn_group ml-12 flex gap-12">
            <button type="button" className=' font-plusJakarta font-semibold text-xs py-4 px-8 border border-white rounded-[30px]'> <FontAwesomeIcon className='pr-2' icon={faPhone}/> Contact  us today </button>
            <button type='button' className='h-12 w-12 rounded-full bg-white flex justify-center items-center flex-col'>
                {
                    Array.from({length:3}, (_, index) =>(
                       <a  key={index} href="#"> <hr className='  border-y-gray-500 w-8 pt-1' /></a>
                    ))
                }
            </button>
            </div>
        </div>
        </div>
        </Container>
    </nav>
  )
}

export default Navbar