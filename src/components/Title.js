import React from 'react'

import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

const Title = ({ title, author }) => {
    return (
        <Box py={3}>
            <Typography gutterBottom variant="h4">{title}</Typography>
            <Typography color="textSecondary">{author ? <span>by {author}</span> : null}</Typography>
        </Box>
    )
}

export default Title
