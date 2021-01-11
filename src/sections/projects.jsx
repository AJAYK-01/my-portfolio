import React from 'react';
import { Box, Grid, IconButton, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import ProjectCard from '../components/ProjectCard';
import ktunotif from './../assets/ktunotif.jpg'
import easyassign from './../assets/easyassign.png';
import monitor from './../assets/monitor.png';
import reactube from './../assets/reactube.png';

export default function Projects(props) {

    const { scroll } = props;

    return(
        <div id="projects" style={{ marginTop: '50px' }} >
            <Typography variant="h2" align='left' style={{ flex:1, textAlign: 'center' }} >My Work</Typography>
            <Grid container justify='center' spacing={2} style={{ marginTop: '1px' }} >
                <ProjectCard 
                    title={"Lootoh (Freelance)"}
                    avatarSrc={'https://cdn.dribbble.com/users/1622791/screenshots/11174104/flutter_intro.png'}
                    content={(<div>Part of the Flutter team that developed the coupon
                        semi advertisement application Lootoh.</div>)}
                    link={'https://tatos.tech/project_05.html#'}
                    
                />
                <ProjectCard 
                    title={"English Wizards (Freelance)"}
                    avatarSrc={'https://cdn.dribbble.com/users/1622791/screenshots/11174104/flutter_intro.png'}
                    content={(<div>Part of the Flutter team that developed the 
                        education application English Wizards</div>)}
                    link={'https://tatos.tech/project_06.html'}
                    
                />
                
                <ProjectCard 
                    title={"Easy Notes"}
                    avatarSrc={easyassign}
                    content={(<div>An Android app for easy notes sharing, including  
                        separate account profiles for sharers and viewers 
                        with Realtime cloud based push notifcations. {<br />}
                        Built using Flutter mobile app framework and Firebase serverless backend.</div>)}
                    link={'https://github.com/AJAYK-01/EasyAssignments'}
                    
                />
                <ProjectCard 
                    title={"ReacTube"}
                    avatarSrc={reactube}
                    content={(<div>An alternative frontend for Youtube. {<br />}
                        Allows you to search, stream and download youtube videos seamlessly. {<br />}
                        Built using React, Node, Invidious API and youtube-dl .</div>)}
                    link={'https://github.com/AJAYK-01/Go-Corona-Meme'}
                    
                />
                <ProjectCard 
                    title={"KTU Notifier"}
                    avatarSrc={ktunotif}
                    content={(<div>A Telegram Bot that gives Live Notifications from the 
                        Ktu's announcements page through DM's. {<br />}
                        Uses Webscraping and Telgram Bot Api in Python and a Firebase Database.</div>)}
                    link={'https://github.com/AJAYK-01/KTU-Notifier'}
                    
                />
                <ProjectCard 
                    title={"moniTOR"}
                    avatarSrc={monitor}
                    content={(<div> A smart dark web monitoring tool built for Hac'KP international
                                online hackathon. {<br />}
                                Uses webscraping, asynchronous programming, and tor, and built using
                                Python and Django. </div>)}
                    link={'http://monitor.hackp.cyberdome.org.in'}
                    
                />
                <Box border={1} borderColor='black' borderRadius='50%' >
                    <IconButton onClick={ () => scroll("contact") } >
                        <KeyboardArrowDownIcon style={{  
                            fontSize: '30px', color: 'black'
                        }} ></KeyboardArrowDownIcon>
                    </IconButton>
                </Box>
            </Grid>
        </div>
    );
}