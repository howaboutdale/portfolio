import { Button } from "@mui/material"
import { Stack } from '@mui/material'
const AboutMe = ({ handleProjectsClick }) => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <section className="about-me-blurb">
                <p>Hello, I'm Dale, a Software Engineer based in Adelaide.</p>
                <p> I possess a strong foundation in software development principles and have a keen interest in honing my skills in various programming languages and technologies.</p>
                <p>With a meticulous approach to coding, I strive to create clean and efficient solutions while ensuring adherence to industry best practices. I enjoy the process of troubleshooting and debugging, finding satisfaction in identifying and resolving issues to enhance the overall quality of software.</p>
                <p>If you require a dedicated and enthusiastic team member to contribute to your projects, I'm ready to collaborate and expand my expertise with you.</p>
            </section>
            <Stack>
                <Button onClick={handleProjectsClick}>Projects</Button>
            </Stack>
            <Button component="a" href="https://github.com/howaboutdale" target='_blank'>GitHub</Button>
            <Button component="a" href="https://www.linkedin.com/in/dale-tromp/" target='_blank'>LinkedIn</Button>
        </div>
    )
}

export default AboutMe