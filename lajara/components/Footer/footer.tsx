
import {
  Box,
  Container,
  Link,
  Typography
} from "@mui/material";
import styles from './footer.module.css'
import styled from 'styled-components'
import Newsletter from "../Newsletter/Newsletter";
import Divider from "../Divider/Divider";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";

export default function footer({ data }) {

  let menus = data.footer.menus
  let newsletter = data.newsletter


  return (
    <Style className = "footer">
      <Container >
        <Box>
          <Box component="nav">
            {menus.map((m) => {
              return (
                <>
                  <Box className="footer-column" sx={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Typography component="div" className="title" variant="body2" sx={{
                        color: "white"
                    }}>{m.menu.title}</Typography>

                    <Box component="ul">
                      {m.menu.links.map((l) => {
                        if (l.link !== '') {
                          return (
                            <li className="footer-link">
                              <Link key={l.text} href = {l.link}>{l.text}</Link>
                            </li>
                          )
                        } else {
                          return (
                            <Typography variant="body2" color="text.secondary">
                              {l.text}
                            </Typography>
                          )
                        }
                      })}
                    </Box>
                  </Box>
                </>
              )
            })}
            <Newsletter data = {newsletter} />
          </Box>
        </Box>
      </Container>
      <Divider color = {'#1F1F1F'} />
      <Container className = "low-footer">
        <Box className = "footer-logo">
            <Logo logo = {data.website_logo} />
        </Box>
        <Box className = "footer-links"> 
            <Link href = {'/'}>Terms</Link>
            <Link href = {'/'}>Privacy</Link>
            <Link href = {'/'}>Cookies</Link>
        </Box>
        <Box className = "socials">
            <Socials socials = {data.socials} />
        </Box>
      </Container>
    </Style>
  )
}

const Style = styled.footer`

  --margin: 1rem;
  background-color: black;
  padding: 5rem 0;


  nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  
  .footer-column  {
    .title {
      color: white;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      margin-bottom: var(--margin);
    }

    p {
        color: white;
          opacity: 0.7;
          transition: opacity 500ms;

          &:not(:last-child) {
            margin-bottom: var(--margin);
          }
    }

    ul {
      padding-left: 0;
      margin: 0;

      

      li {
        list-style: none;

        &:not(:last-child) {
          margin-bottom: var(--margin);
        }

        
        * {

          color: white;
          opacity: 0.7;
          transition: opacity 500ms;


          &:hover {
            text-decoration: none;
            opacity: 1;
          }
        }
      }
    }
  }



  .low-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .footer-links {
      display: flex;

      & > :not(:last-child) {
        margin-right: 30px;
      }

      * {
        color: white;
        opacity: 0.7;
        transition: opacity 500ms;

        &:hover {
          opacity: 1;
        }
      }
    }
  }


`
