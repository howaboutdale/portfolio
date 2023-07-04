import { Button } from "@mui/material"
import { Stack } from '@mui/material'

const Project3 = () => {
    return (
        <div className="container">
            <h1>DND Character Sheet App</h1>
            <p className="project-description">
                This was my first major project using Python and Flask. I intended to create an app that would allow a person to go through the process of creating a Dungeons & Dragons character sheet. The product is defintely rough around the edges but given the time constraints that were in place and how new I was to the technologies used, I am happy with what I achieved.
            </p>
            <p>Tech Used: Python, Flask</p>
            <Button component="a" href="https://github.com/howaboutdale/DnD_app" target='_blank'>GitHub Repo</Button>
        </div>
    )
}

export default Project3