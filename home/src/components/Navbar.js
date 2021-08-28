import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

// register lottie and define custom element
defineLordIconElement(loadAnimation);


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">E-Utopian</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <lord-Icon src="https://cdn.lordicon.com/lupuorrc.json"></lord-Icon>
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Services</a>
                        </li><li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
</nav>
        </div>
        
    );
}

export default Navbar;