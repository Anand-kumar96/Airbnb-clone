import React from 'react'
import Banner from './Banner';
import './Home.css';
import Card from './Card'
function Home() {
  return (
    <div className='home'>
        <Banner/>
        <div className='home__section section1'>
        <Card
            src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Online Experiences"
            description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
            src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
            title="Unique stays"
            description="Spaces that are more than just a place to sleep."
         />
        <Card
            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
            title="Entire homes"
            description="Comfortable private places, with room for friends or family."
        />
        </div>
        <div className='home__section section2'>
        <Card
                src="https://a0.muscache.com/im/pictures/fbd3b5e1-24d1-4390-b319-fd37f4a81aad.jpg?im_w=720"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/a7a7f026-8b00-4016-9c84-2d7f9480cdae.jpg?im_w=720"
            title="Penthouse in London"
            description="Enjoy the amazing sights of London with this stunning penthouse"
            price="£350/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/7a9506ba-f344-4f2e-a2b2-74ee881124fc.jpg?im_w=720"
            title="1 Bedroom apartment"
            description="Superhost with great amenities and a fabolous shopping complex nearby"
            price="£70/night"
        />
          <Card
            src="https://a0.muscache.com/im/pictures/b7c9264d-73c9-45c3-882e-6e9577d63d68.jpg?im_w=720"
            title="1 Bedroom apartment in Drimnin Uk "
            description="Unique and Secluded AirShip with Breathtaking Highland Views"
            price="₹18,422/night"
        />
        </div>
        <div className='home__section section2'>
        <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720"
                title="1 Bedroom 1 Guestroom in  North Jeolla , South Korea"
                description="Use of the entire space of the accommodation for one day"
                price="₹18,422/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/a809a76b-311e-4c90-bce1-2a0898ad3e15.jpg?im_w=720"
            title="4 bedrooms in North Jeolla, South Korea"
            description="This is a hanok accommodation experience with the coolness of a traditional hanok. "
            price="₹10,602/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-49268853/original/599ad5b3-23af-4182-9e1d-bd8b32539897.jpeg?im_w=720"
            title="private house in North Jeolla, South Korea "
            description="The bedroom is prepared in the attic, so you can use the first floor at a relatively leisurely rate."
            price="5,722/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53789489/original/0bb5919f-0242-4cb3-9f96-905371fe81e5.jpeg?im_w=720"
            title="private house in North Jeolla, South Korea "
            description="Escape from the hustle of everyday life and the city to capture the eaves, foothills."
            price="₹18,422/night"
        />
        </div>
        <div className='home__section section2'>
        <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-762917784278476057/original/f57ce0ef-7674-4857-a23a-f00b10cec742.jpeg?im_w=720"
                title="Private nice big room with fireplace in Sweden"
                description="Bring your loved ones to this amazing room!"
                price="₹5,422/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-774666419548856679/original/9fe382c7-e787-4a4e-8b98-8f46b9944403.jpeg?im_w=720"
            title="Warm little nook! in Norway"
            description="Come and see one of the greatest phenomena of nature from the balcony."
            price="₹10,602/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-727367308333778590/original/9e37974a-e85d-4490-962d-bd2ad04b03b6.jpeg?im_w=720"
            title="Small modern apartment in Norway "
            description="Great balcony with a lovely view of Kvaløya. Quiet neighborhood."
            price="9,722/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/dbce2e2d-8261-45ef-8cec-16b5794b64ac.jpg?im_w=720"
            title="private house in Norway "
            description="Escape from the hustle of everyday life and the city to capture the eaves."
            price="₹7,422/night"
        />
        </div>
        <div className='home__section section2'>
        <Card
                src="https://a0.muscache.com/im/pictures/df6f2fe0-6a5a-4780-b580-3402e6e8d350.jpg?im_w=720"
                title="SCARLET PEARL HALONG CRUISE in Vietnam"
                description="Beautiful view of nature with Full equipped luxury en-suite cabin with A/C"
                price="₹27,422/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/miso/Hosting-692878913844400960/original/03fd3afb-eb5b-4a5c-ac97-ae93573b4e79.jpeg?im_w=720"
            title="Lan Ha bay 2 days 1 night - Boutique Cruise in Vietnam"
            description="Overnight on Boutique Cruise in looks beautiful. "
            price="₹29,602/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/63901e76-2eca-49bd-be9b-d56695a9fb56.jpg?im_w=720"
            title="Maldives Luxury Yacht Private Charter in Maldives"
            description="This elegant Maldivian-made thrill-seeker is all about chasing the sun, surf and sea adventures."
            price="75,722/night"
        />
        <Card
            src="https://a0.muscache.com/im/pictures/ce2b07d8-ed1c-467a-9ee2-4771f15cebff.jpg?im_w=720"
            title="Spend the night on luxury yacht in Yerseke Harbour in Netherlands."
            description="One of our goals is to make guests enjoy themselves as much as possible ."
            price="₹22,422/night"
        />
        </div>
    </div>
  )
}

export default Home