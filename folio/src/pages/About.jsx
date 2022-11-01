import "../style.css";

const About = () => {
    return (
        <div className="about__section">
            <div className="about__me">
                <p>Hi! My name is Jet. I'm a <span>developer</span>.</p>

                <p>
                    At the age of 12 I discovered programming & coding. My first ever language was JavaScript. Little
                    did I know that I'd grow up to be a developer that is heavily focused in JavaScript.
                </p>
                <p>I very much enjoy creating aesthetically pleasing websites with amazing user experience</p>
            </div>
            <div className="about__tech">
                <h1>tech stack</h1>
                <div className="tech">
                    <h2>html</h2>
                    <h2>css</h2>
                    <h2>sass</h2>
                    <h2>gsap</h2>
                    <h2>javascript</h2>
                    <h2>react</h2>
                    <h2>react router</h2>
                    <h2>node</h2>
                    <h2>express</h2>
                    <h2>mongo db</h2>
                </div>
            </div>
        </div>
    );
};

export default About;
