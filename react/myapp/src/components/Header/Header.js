import './Header.css'
import Nav from '../Nav/Nav'


export default function Header(props) {
    let className = "companyName"

    let companyName = props.companyName

    return (
        <div className="Header">
            <h1 className={className}> Company Name : {companyName} </h1>
            <Nav/>
        </div>
    )
 
}