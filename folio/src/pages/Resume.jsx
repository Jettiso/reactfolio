import "../style.css";
import { pdf } from '../img/resume.pdf';

const Resume = () => {
    return (
        <>
            <a href={pdf} download> Download PDF</a>
        </>
    );
};

export default Resume;
