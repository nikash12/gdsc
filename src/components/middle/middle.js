
import './middle.css'
export default function Middle(){


    return(
        <div className='entire-box'>
            <a href='#' >
                <div className='add-box '>
            <div className=" text-white plus" >
                &#x2b;
            </div>
            <h1 className='text-white'>Add Events</h1>
                </div>
            </a>
            
            <a href='#'>
                <div className='add-box '>
            <div className=" text-white plus" >
            &#x2212;
            </div>
            <h1 className='text-white'>Remove Events</h1>
                </div>
            </a>
        </div>
    )
}

