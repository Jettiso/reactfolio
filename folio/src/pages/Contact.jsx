import "../style.css";

const Contacts = () => {
    return (
        <div className="contact__section">
            <h1>Want to develop something amazing together?</h1>
            <div className="contact__links">
                <a
                    href="https://github.com/Jettiso"
                    target="_blank"
                    rel="noferrer"
                >
                    <i class="fa-brands fa-github largeIcon"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/joshua-earl-tongson-654660216/"
                    target="_blank"
                    rel="noferrer"
                >
                    <i class="fa-brands fa-linkedin largeIcon"></i>
                </a>
                <a
                    href="https://www.facebook.com/paxajj/"
                    target="_blank"
                    rel="noferrer"
                >
                    <i class="fa-brands fa-facebook-messenger largeIcon"></i>
                </a>
            </div>
        </div>
    );
};

export default Contacts;
