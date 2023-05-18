import { Container } from "./styles"
import { Link } from "react-router-dom"
import { FiClipboard, FiTrendingUp } from "react-icons/fi"

export function SideBar(){
    return(
        <Container>
            <ul>
                <Link to="/extract">
                    <FiClipboard/>
                    <li >Extrato</li>
                </Link>
                <Link to='/'>
                    <FiTrendingUp/>
                    <li>DashBoard</li>
                </Link>
            </ul>
        </Container>
    )
}