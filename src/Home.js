// Home.js
import React from 'react';
import ImageSlider from './ImageSlider' 
import Advantages from './Advantages';
import DarkHero from './DarkHero';
import DarkHeroB from './DarkHeroB';
import DarkHeroC from './DarkHeroC';
import DarkHeroD from './DarkHeroD';
import DarkHeroE from './DarkHeroE';
import { Embed } from 'semantic-ui-react';
import { Rating,Button, Header, Image, Modal, Icon, Item, Label  } from 'semantic-ui-react';


const Home = () => {
  const [open, setOpen] = React.useState(false)
  const paragraph = <Image src='/images/wireframe/short-paragraph.png' />
  return (
    <div>
            <ImageSlider/>

  <Embed
    id='UJEUwEJ6gH4?'
    placeholder='/images/image-16by9.png'
    source='youtube'
  />
      <ImageSlider/>

      <div className="home__categories">
        <div style={{ display:'flex',alignItems:"flex-end",justifyContent:"center",flexDirection:"column",marginTop:"180px",marginBottom:"90px",height: "15vh"}}>
          <div style={{ background: "#EB8A04",height:"170px",width:'50%',zIndex: '-1',position: 'absolute'}}>
          </div>
      <div style={{ display: "flex",alignItems:'center',flexDirection:"column",justifyContent:'center',background: 'transparent', zIndex: '-1',marginRight: '480px'}}>
            <h1 style={{ color: 'black',marginBottom: "0px",}} className='quote__h1'>Full Service, At your Disposal</h1>
            <h4 style={{ display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'gray',marginTop: "0px"}} className='quote__h4'>
              More Than You Imagine
            </h4>
          </div>
          </div>
          <DarkHeroD/>
        <div style={{ display:'flex',alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"60px",marginBottom:"120px",height: "15vh"}}>
          <div style={{ background: "#EB8A04",height:"170px",width:'50%',zIndex: '-1',position: 'absolute'}}>
          </div>
          <div style={{ display: "flex",alignItems:'center',flexDirection:"column",justifyContent:'center',background: 'transparent', zIndex: '-1',marginRight: '480px'}}>
            <h1 style={{ color: 'blue',marginBottom: "0px",}} className='quote__h1'>Choose What's Best For You!</h1>
            <h4 style={{ display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'gray',marginTop: "0px"}} className='quote__h4'>
              Make Your Vacation Comfortable.
            </h4>
          </div>
          </div>
          <DarkHeroE/>
          <div style={{ display:'flex',alignItems:"flex-end",justifyContent:"center",flexDirection:"column",marginTop:"180px",marginBottom:"90px",height: "15vh"}}>
          <div style={{ background: "#EB8A04",height:"170px",width:'50%',zIndex: '-1',position: 'absolute'}}>
          </div>
          <div style={{ display: "flex",alignItems:'center',flexDirection:"column",justifyContent:'center',background: 'transparent', zIndex: '-1',marginRight: '480px'}}>
            <h1 style={{ color: 'blue',marginBottom: "0px",}} className='quote__h1'>Luxury Redefined</h1>
            <h4 style={{ display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'gray',marginTop: "0px"}} className='quote__h4'>Luxury is Personal</h4>
          </div>
          </div>
          <div className="some__quotes">
          <h4>BM Hotel Stand As A True Paragon of World Class Hospitality And Have Some Of The Best Luxury Hotels in India.They are Synonymous With Excellence in Hospitality and being Able To Offer Unforgettable Holiday And Stay Experiences To Guests in The Most Exquisite Setting.With "Stay With us, Stay With Nature Being The Sustained Outlook Of This Luxury Hotel Chain, A Stay at any of its Properties truly Brings guests Closer to a sense Of WellBeing and Oneness With Nature. BM Hotels Offers a Safe And Secure Environment, Authentic Hospitality,Thoughtful Service, Lavish accommodation and class facilities.</h4>
        </div>
        <DarkHero/>
        <DarkHeroB/>
        <DarkHeroC/>
        <Advantages />
        <div style={{ display:'flex',alignItems:"flex-end",justifyContent:"center",flexDirection:"column",marginTop:"180px",marginBottom:"90px",height: "15vh"}}>
          <div style={{ background: "#EB8A04",height:"170px",width:'50%',zIndex: '-1',position: 'absolute'}}>
          </div>
          <div style={{ display: "flex",alignItems:'center',flexDirection:"column",justifyContent:'center',background: 'transparent', zIndex: '-1',marginRight: '480px'}}>
            <h1 style={{ color: 'blue',marginBottom: "0px",}} className='quote__h1'>They Loved Our Hospitality</h1>
            <h4 style={{ display: 'flex',alignItems: 'center',justifyContent: 'center',color: 'gray',marginTop: "0px"}} className='quote__h4'>
              Explore The World With Ease.
            </h4>
          </div>
        </div>
        <DarkHeroC/>
      </div>
    </div>
  );
};

export default Home;

/*
      <Container style={{ marginTop: '40px' }}>
        <Header as='h2' textAlign='center' content='Featured Rooms' />
        <Grid columns={3} doubling stackable>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <img src='/images/room1.jpg' alt='Room 1' />
                <Card.Content>
                  <Card.Header>Deluxe Suite</Card.Header>
                  <Card.Meta>$200 per night</Card.Meta>
                  <Card.Description>
                    Spacious suite with a stunning view.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <img src='/images/room2.jpg' alt='Room 2' />
                <Card.Content>
                  <Card.Header>Luxury Villa</Card.Header>
                  <Card.Meta>$300 per night</Card.Meta>
                  <Card.Description>
                    Experience luxury in a private villa.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <img src='/images/room3.jpg' alt='Room 3' />
                <Card.Content>
                  <Card.Header>Premium Room</Card.Header>
                  <Card.Meta>$150 per night</Card.Meta>
                  <Card.Description>
                    Comfortable room with modern amenities.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

    

      <Container style={{ marginTop: '40px' }}>
        <Header as='h2' textAlign='center' content='Customer Testimonials' />
        <Grid columns={3} doubling stackable>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>John Doe</Card.Header>
                  <Card.Meta>Guest</Card.Meta>
                  <Card.Description>
                    "Amazing experience! The hotel exceeded my expectations."
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Jane Smith</Card.Header>
                  <Card.Meta>Visitor</Card.Meta>
                  <Card.Description>
                    "The staff was friendly, and the rooms were impeccable."
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Sam Johnson</Card.Header>
                  <Card.Meta>Traveler</Card.Meta>
                  <Card.Description>
                    "A perfect blend of luxury and comfort. Highly recommended!"
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;*/
