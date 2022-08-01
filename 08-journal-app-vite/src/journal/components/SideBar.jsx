import { useSelector } from "react-redux"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from "@mui/material"
import { SideBarItem } from "./";


export const SideBar = ({drawerWidth = 240}) => {

    const {displayName} = useSelector(state=>state.auth);// obtengo info de auth
    const {notes} = useSelector(state=>state.journal); //obtengo info de journal

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
                    {displayName}
                </Typography>
            </Toolbar>
          
       
            <Divider/>
            <List>
                {
                    notes.map( note=>(
                       <SideBarItem key={note.id} {...note}/>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
