import './Nav.css'
import Link from '../Link/Link'


export default function Nav() {

    let links = [
        {title:"Home",url:'/'},
        {title:"Search", url:"/search"}
    ]

    return (
        <div className="Nav">
            <ul>
                {
                    links.map((lnk,idx)=>{

                        return <Link key={idx} link={lnk}></Link>
                    })
                }

            </ul>
        </div>
    )

}