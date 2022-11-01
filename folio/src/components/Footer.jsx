import "../style.css";

function Footer() {
    return (
        <footer>
            <div className="footer__contacts">
                <a href="https://github.com/Jettiso"target="_blank" rel="noferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/joshua-earl-tongson-654660216/"target="_blank" rel="noferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/paxajj/"target="_blank" rel="noferrer">
                    <i className="fa-brands fa-facebook-messenger"></i>
                </a>
            </div>
            <p>
                Made with ❤ by
                <a href="https://www.linkedin.com/in/joshua-earl-tongson-654660216/" target="_blank" rel="noferrer" className="dev__footer">
                    jettison
                </a>
            </p>
        </footer>
    );
}

export default Footer;
