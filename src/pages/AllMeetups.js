import MeetupList from "../components/meetUps/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Quite_summer_evening_in_the_port_city_Klaipeda.jpg/1920px-Quite_summer_evening_in_the_port_city_Klaipeda.jpg",
    address: "MeetupsStreet 5, 12345 Klaipeda City",
    description: "This is first amazing meetup, jeeeei",
  },
  {
    id: "m2",
    title: "This is the first meetup 2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Vilnius_old_town_by_Augustas_Didzgalvis.jpg",
    address: "MeetupsStreet 5, 12345 Vilnius City",
    description: "This is first amazing meetup, jeeeei",
  },
  {
    id: "m3",
    title: "This is the first meetup 3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vytautas_the_Great_Bridge_from_hill%2C_Kaunas%2C_Lithuania_-_Diliff.jpg/1920px-Vytautas_the_Great_Bridge_from_hill%2C_Kaunas%2C_Lithuania_-_Diliff.jpg",
    address: "MeetupsStreet 5, 12345 Kaunas City",
    description: "This is first amazing meetup, jeeeei",
  },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetupsPage;
