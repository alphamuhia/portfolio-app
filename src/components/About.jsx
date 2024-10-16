import React from "react";
import form from "./form";

function About() {
  return (
    <div>
      <h1>About page</h1>
      <form />
      <section>
        <h2>My Journey to Local Cuisine</h2>
        <p>
          Alpha Peter's love for local cuisine began during his travels across
          Kenya. As he explored the beautiful landscapes, he became fascinated
          with the cultural richness of the regions he visited. Every town,
          every village had its unique flavor, from the coastal delights in
          Mombasa to the hearty stews of the Rift Valley.
        </p>
        <p>
          With each new dish, Alpha discovered not just food but stories —
          stories of the people who made them and the traditions they carried.
          This fascination turned into a deep passion for cooking and savoring
          the diverse flavors of Kenyan cuisine. Today, his travels are
          incomplete without indulging in local delicacies and learning the
          recipes that define Kenyan culture.
        </p>
      </section>

      <section class="hero">
        <div class="overlay-text">
          <p>
            Peter, a young man in his late twenties, lived in the heart of
            Nairobi, Kenya. His life was a delicate balance between work and
            passion. By day, he was a diligent website designer, working
            freelance from his cozy apartment. By night, his world shifted to
            virtual adventures, diving deep into games and watching anime and
            movies.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
