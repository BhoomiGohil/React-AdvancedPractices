import Contact from "./Contact";

function MainContent() {
  return (
    <div className="contacts">
      <Contact
        image="practice3-whiskerson.jpg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        image="practice3-fluffykins.jpg"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        image="practice3-felix.jpg"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        image="practice3-pumpkin.jpg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default MainContent;
