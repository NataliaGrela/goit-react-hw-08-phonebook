import Container from '@mui/material/Container';
import css from "./Home.module.css"

export const Home = () => {
  return (
    <div>
      <Container maxWidth="sm">
              <h1 className={css.homeTitle}>PHONEBOOK</h1>
      </Container>
    </div>
  );
};
