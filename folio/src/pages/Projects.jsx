import "../style.css"; 
import customData from "../projects.json";

const Projects = () => {
    let data = customData.projects;
    const proj = data.map((item) => {
        const { name, markup, style, language, imgUrl, id, url, api, animation } = item;
        return (
            <div className="project__container" key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                    <div className="img__wrapper">
                        <img src={imgUrl} alt="projectimg" />
                    </div>
                </a>
                <h1>{name}</h1>
                <div className="tech__stack">
                    <span>{markup}</span>
                    <span>{style}</span>
                    <span>{language}</span>
                    <span>{api}</span>
                    <span>{animation}</span>
                </div>
            </div>
        );
    });
    return <div className="projects__grid">{proj}</div>;
};

export default Projects;
