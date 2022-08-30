import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link'
import IconButton from "@mui/material/IconButton";
import Image from "../../node_modules/next/image";
import styles from './navbar.module.css'

export default function Navbar({ navItems }) {
  let menuItems = navItems.menu.menuItems.edges;
  let logo = navItems.customLogo;
  console.log("Nav", menuItems);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav" position="absolute" className={styles.navbar}>
        <Toolbar className={styles.navigation}>

          <Box>
            <Image src={logo.file} alt={logo.alt} height={50} width={150} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, }}>
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
          >
            {" "}
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box >
  );
}
