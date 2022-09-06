import * as React from "react";
import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem, ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link'

import Image from "../../node_modules/next/image";
import styles from './navbar.module.css'
import { useState } from "react";


export default function Navbar({ navItems }) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer)
  }
  let menuItems = navItems.menu.menuItems.edges;
  let logo = navItems.customLogo;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav" position="absolute" className={styles.navbar}>
        <Toolbar className={styles.navigation}>

          <Box>
            <Image src={logo.file} alt={logo.alt} height={50} width={150} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "25px", position: "absolute", marginLeft: "50%", transform: "translateX(-50%)" }}>
            {menuItems.map((item) => (
              <Link href={item.node.path} key={item.label} sx={{ color: "#fff" }}>
                {item.node.label}
              </Link>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer()}
          >
            {" "}
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={'right'}
        open={drawer}
        onClose={() => toggleDrawer()}

      >
        <Box>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton>

                  <Link href={item.node.path} key={item.label} sx={{ color: "#fff" }}>

                    {item.node.label}
                  </Link>
                </ListItemButton>
              </ListItem>

            ))}
          </List>
        </Box>
      </Drawer >
    </Box >
  );
}
