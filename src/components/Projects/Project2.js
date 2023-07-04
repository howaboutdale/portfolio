import { Button } from "@mui/material"
import { Stack } from '@mui/material'

const Project2 = () => {
    return (
        <div className="container">
            <h1>Afterhours IA</h1>
            <p className="project-description">
                Afterhours IA was a group project I worked on whilst studying Software Engineering with General Assembly. The purpose of the app was to create an easy to use front end and integrate a backend that stored various quotes from the teachers of the course.
            </p>
            <p>
                Overall, it was a very fun expereince, both learning the ropes of working in a team with branch managment and being able to bounce ideas and problems off of my teammates.
            </p>
            <p>Tech Used: JavaScript, Express</p>
            <Button component="a" href="https://github.com/yablony/afterhours_ia" target='_blank'>GitHub Repo</Button>

        </div >
    )
}

export default Project2