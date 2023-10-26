import Box from './box.js'
import './main.css'
import Search from './search/search.js'

export default function Main(){
    return(
        <div className='main'>
            <h1 className='main-text'>SEARCH FOR EVENTS HERE</h1>
            <p className='login-text'>No events yet? <a className='link' href='https://calendar.google.com/calendar/u/0/r'>CREATE</a></p>
            <Search />
        </div>

    )
}