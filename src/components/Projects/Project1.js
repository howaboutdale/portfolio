import { Button } from "@mui/material"
import { Stack } from '@mui/material'

const Project1 = () => {
    return (
        <div className="container">
            <h1>PomodoroPro</h1>
            <p className="project-description">
                PomodoroPro is, as the name might suggest a Pomodoro Timer. Essentially an app that allows you to set a timer for a working period, and to also set a timer for a break period. It's a popular technique to improve focus and reduce the onset of brain-fog.
            </p>
            <p>Tech Used: JavaScript, React</p>
            <Button component="a" href="https://github.com/howaboutdale/Pomodoro" target='_blank'>GitHub Repo</Button>
        </div>
    )
}

export default Project1