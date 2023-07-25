import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useState } from 'react';

const Landing = ({ handleAboutMeClick, handleProjectsClick }) => {



    return (
        <div className='container'>
            <p className='main-header'>Dale Tromp</p>
            <p className='title'>Software Engineer</p>
            <p className='subtext'>Transforming Ideas into Innovative Software Solutions.</p>
            <p className='subtext'>I am currently seeking employment, if you are in need of an adaptable, driven and collaborative helping hand in your workplace, or even just for your next project. Please feel free to follow the links and reach out!</p>
            <Stack>
                <Button onClick={handleAboutMeClick}>About Me</Button>
                <Button onClick={handleProjectsClick}>Projects</Button>
            </Stack>
            <Button component="a" href="https://github.com/howaboutdale" target='_blank'>GitHub</Button>
            <Button component="a" href="https://www.linkedin.com/in/dale-tromp/" target='_blank'>LinkedIn</Button>
        </div>
    )
}

export default Landing