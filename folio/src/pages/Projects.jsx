import "../style.css"; 
import customData from "../projects.json";

const Projects = () => {
    let data = customData.projects;
    const proj = data.map((item) => {
        const { name, markup, style, language, imgUrl, id, url } = item;
        console.log(imgUrl);
        return (
            <div className="project__container" key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                    <div className="img__wrapper">
                        <img src={imgUrl} alt="projectimg" />
                    </div>
                </a>
            </div>
        );
    });
    return <div className="projects__grid">{proj}</div>;
};

export default Projects;
