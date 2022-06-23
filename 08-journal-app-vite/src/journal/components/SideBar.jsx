import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from "@mui/material"


export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width:{sm: drawerWidth}, flexShrink:{sm:0}}}
    >   
        {/* Todo va dentro del Drawer (lo que lo renderiza) */}
        <Drawer
            variant='permanent' //temporal
            open //true
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxSizing:'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Agustin Gaitan
                </Typography>
            </Toolbar>
          
       
            <Divider/>
            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText
                                        primary={text}
                                    />
                                    <ListItemText
                                        secondary={ 'fkjsdhfsdfjkshdhajsdhkasdjahsdkash' }
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
