import Button from '@mui/material/Button';
import "./NavBar.css"

export default function NavBar(){
    return(
        <div className='NavBar'>
            <nav>
                <div className="logo">
                    <img src="./public/brand_logo.png" alt="nike" />
                </div>

                    <ul>
                        <li><a href="#menu"><b>MENU</b></a></li>
                        <li><a href="#location"><b>LOCATION</b></a></li>
                        <li><a href="#about"><b>ABOUT</b></a></li>
                        <li><a href="#content"><b>CONTANT</b></a></li>
                    </ul>

                    <Button variant="contained" color="error">
                        Login
                    </Button>
            </nav>
        </div>
    )
}