import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useState } from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

const Projects = ({ handleAboutMeClick }) => {

    const [projectToDisplay, setProjectToDisplay] = useState(1)
    const handleNextProjectClick = () => {
        if (projectToDisplay < 4) {
            setProjectToDisplay(projectToDisplay + 1)
        } else if (projectToDisplay === 4) {
            setProjectToDisplay(1)
        }

    }
    const handlePreviousProjectClick = () => {
        if (projectToDisplay > 1) {
            setProjectToDisplay(projectToDisplay - 1)
        } else if (projectToDisplay === 1) {
            setProjectToDisplay(4)
        }

    }


    return (
        <div>
            {projectToDisplay === 1 && (
                <Project1 />
            )}
            {projectToDisplay === 2 && (
                <Project2 />
            )}
            {projectToDisplay === 3 && (
                <Project3 />
            )}
            {projectToDisplay === 4 && (
                <Project4 />
            )}
            <Stack>
                <Button onClick={handleAboutMeClick}>About Me</Button>
            </Stack>
            <Stack direction={'row'} style={{ justifyContent: 'center' }}>
                <Button component="a" href="https://github.com/howaboutdale" target='_blank'>GitHub</Button>
                <Button component="a" href="https://www.linkedin.com/in/dale-tromp/" target='_blank'>LinkedIn</Button>
            </Stack>
            <Stack direction={'row'} style={{ justifyContent: 'center' }}>
                <Button onClick={handlePreviousProjectClick}>Previous Project</Button>
                <Button onClick={handleNextProjectClick}>Next Project</Button>
            </Stack>
        </div>

    )
}

export default Projects