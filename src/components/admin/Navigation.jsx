import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Avtar from "../..//assets/Ellipse93.png";


const Navigation = () => {
    const routeNavigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            
          
                <Toolbar>
                
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    
                         <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

     
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div class="sidebar-brand-icon rotate-n-15">
                <img src="https://application.tgiscaleme.com/static/media/Ellipse93.7ad7c7e8b443a55b2136.png"/>
                  
                </div>
                <div class="sidebar-brand-text mx-3">julie marcos managing director</div>
              
            </a>
            
              <li class="nav-item first">
               <a variant="text" sx={{ color: '#f0f0f0', ml: 2 }} onClick={() => routeNavigate('/admin/users')}>
                        My Team
                    </a>
            </li>
             <li class="nav-item">
               <a variant="text" sx={{ color: '#f0f0f0', ml: 2 }} onClick={() => routeNavigate('/admin/users')}>
                        Users
                    </a>
            </li>
            
           
            
            
             <li class="nav-item">
              <a variant="text" sx={{ color: '#f0f0f0', ml: 2 }} onClick={() => routeNavigate('/admin/disputes')}>
                        Disputes
                    </a>
            </li>
            
       
                    

                   
                    </ul>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
