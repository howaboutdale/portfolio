import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useState } from 'react';

const Landing = ({ handleAboutMeClick, handleProjectsClick }) => {



    return (
        <div className='container'>
            <p className='main-header'>Dale Tromp</p>
            <p className='subtext'>Transforming Ideas into Innovative Software Solutions.</p>
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