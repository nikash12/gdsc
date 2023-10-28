import Box from './box.js'
import './main.css'
import Search from './search/search.js'

export default function Main(){
    return(
        <div className='main '>
            <h1 className='main-text'><span className='s bordered-letter'>SEARCH</span> <span className='f bordered-letter'>FOR</span> <span className='e bordered-letter'>EVENTS</span> <span className='h bordered-letter'>HERE</span></h1>
            <p className='login-text'>No events yet? <a className='link' href='https://calendar.google.com/calendar/u/0/r'>CREATE</a></p>
            <Search />
        </div>

    )
}