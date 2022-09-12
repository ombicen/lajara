
import {
  Box,
  Container,
  Link
} from "@mui/material";
import styles from './footer.module.css'
export default function Footer({ navItems }) {
  let menuItems = navItems.menu.menuItems.edges;
  return (
    <footer className={styles.footer}>
      <Container >
        <Box>
          <Box component="nav" className={styles.footer__list}>
            {menuItems.map((item) => (
              <Link color="inherit" underline="hover">{item.node.label}</Link>
            ))}

          </Box>

        </Box>
      </Container>

    </footer>
  )
}
