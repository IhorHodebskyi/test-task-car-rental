import { Item, Link, List, Paragraph, Title, Wrapper } from './Home.styled';

const Home = () => {
  return (
    <>
      <Wrapper>
        <Title>Car rental in Germany</Title>
        <List>
          <Item>
            <Paragraph>
              The Auto-Rental company provides car rental and rental services in
              cities and airports in Germany. We rent cars from economy to
              standard classes, as well as minibuses with 7 and 9 seats.
            </Paragraph>
          </Item>
          <Item>
            <Link to="/catalog">Car selection</Link>
          </Item>
        </List>
      </Wrapper>
    </>
  );
};

export default Home;
