import React from 'react';
import { Typography, Grid, IconButton, Box, makeStyles } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    title: { [theme.breakpoints.down('sm')]: {marginTop: '50px'} } ,
}))

export default function About(props) {

    const classes = useStyles();
    const { scroll } = props;

    return(
      <div id="about" className={classes.title} >
        <Typography variant="h2" style={{ flex:1, textAlign: 'center' }} >About</Typography>
        <Grid container direction='row' justify='center' spacing={3} >
            <Grid item sm={12} md={12} style={{ marginTop: '38px', color: 'black' }} >
                {/* <Card  >
                    <CardContent > */}
                        <Typography style={{ marginBottom: '18px', fontSize: '18px' }} >
                            I'm a 2019-2023 batch engineering student pursuing Computer Science at
                            College of Engineering, TVM.
                            I am also a freelance Flutter developer and 
                            my primary passion and love in tech is for mobile app dev,
                            backend design and just building cool projects!
                        </Typography>
                        <Typography style={{ marginBottom: '18px', fontSize: '18px' }} >
                            Currently I am a Frontend developer, with knowledge and experience in
                            the cross platform mobile app framework Flutter, and web framework React.
                            My aim is to be a full stack developer, and I currently have some experience in backend 
                            development using frameworks like node-express and flask as well.
                        </Typography>
                        <Typography style={{ marginBottom: '18px', fontSize: '18px' }} >
                            I love open source and therefore have participated in many open source
                            promoting workshops and programmes in college and is now the Project Co-ordinator
                            of FOSSCell Cet Club. I strongly believe in the community tech culture and collaboration with its members
                            and therefore try to involve myself in all tech related discussions and communities whenever
                            possible.
                        </Typography>
                        <Typography style={{ marginBottom: '18px', fontSize: '18px' }} >
                            I enjoy working and collaborating with teams and am currently part of a student
                            team, as the UX designer and mobile frontend developer, of Ceekyoo search engine 
                            project.
                        </Typography>
                    {/* </CardContent>
                </Card> */}
            </Grid>
            <Grid container justify='center' >
                <Box border={1} borderColor='black' borderRadius='50%' >
                    <IconButton onClick={ () => scroll("skills") } >
                        <KeyboardArrowDownIcon style={{  
                            fontSize: '30px', color: 'black'
                        }} ></KeyboardArrowDownIcon>
                    </IconButton>
                </Box>                
            </Grid>
        </Grid>
      </div>
    );
}