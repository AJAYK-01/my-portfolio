import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import React from 'react';

const ProjectCard = (props) => {

    const { title, avatarSrc, content, link  } = props;

    return(
        <Grid item sm={12} md={6} >
            <Card >
                <CardHeader title={title} action={
                    <Avatar src={avatarSrc} ></Avatar>
                } ></CardHeader>
                <CardContent>
                    <Typography> {content} </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => window.open(link, '_blank')} 
                        size='small' style={{ color: '#FF6666' }} >
                        <Typography variant='subtitle2' >Project Link</Typography>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProjectCard;