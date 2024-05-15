import Typewriter from "typewriter-effect";

const About = () => {
  const profileImg =
    "https://ca.slack-edge.com/TFTHLDQQ4-U055WSVQWN5-cc2b1d79d8d9-512";

  return (
    <div className="bg-gray-500 w-full text-white px-10 py-12 shadow-3d rounded-b-xl">
      <h1 className="text-6xl pb-4 border-b-2 mb-8">
        <Typewriter
          onInit={(typewriter: any) => {
            const { cursor } = typewriter.state.elements;
            typewriter
              .changeDelay(60)
              .typeString("Bio")
              .pauseFor(300)
              .callFunction(() => cursor.setAttribute("hidden", "hidden"))
              .start();
          }}
        />
      </h1>
      <article>
        <figure>
          <img
            src={profileImg}
            className="md:float-left w-64 mr-4 shadow-3d-about rounded-lg border border-black"
          />
        </figure>

        <p className="text-lg my-6">
          Brandon Ryan is a passionate software engineer known for his creative
          problem-solving and love for innovation. Growing up in sunny
          California, Brandon earned his degree in Software Engineering from
          California Polytechnic State University, San Luis Obispo. After
          graduation, he embarked on an exciting journey across the Atlantic and
          now calls Munich, Germany, his home.
        </p>
        <p className="text-lg my-6">
          Born deaf and wearing cochlear implants, Brandon has never let this
          define his limits. His resilience and determination have propelled him
          to pursue his passions with vigor. Whether it’s on the field playing
          sports or strumming a tune on his guitar, he embraces every
          opportunity to live life to the fullest.
        </p>
        <p className="text-lg my-6">
          Brandon's creativity naturally led him to frontend engineering, where
          he excels in crafting user-friendly and visually appealing interfaces.
          The ever-evolving world of AI and artificial intelligence captivates
          him, blending his love for science fiction with cutting-edge
          technology. Driven by the potential of AI to revolutionize how we
          interact with the world, he is excited to be a part of this
          transformative field.
        </p>
        <p className="text-lg">
          When he's not coding or exploring new tech trends, Brandon enjoys
          delving into the latest sci-fi novels or experiencing the rich culture
          and vibrant life Munich has to offer. Follow Brandon's journey as he
          continues to push boundaries and innovate in the world of software
          engineering.
        </p>
      </article>
    </div>
  );
};

export default About;
