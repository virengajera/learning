import './Link.css'

export default function Link(props) {

    let title = props.link.title
    let url = props.link.url
    return (
        <li><a href={url}>{title}</a></li>
    )

}