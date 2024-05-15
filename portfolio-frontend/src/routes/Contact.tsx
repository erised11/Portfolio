import Typewriter from "typewriter-effect";
import FormComponent from "../components/About/FormComponent";

const Contact = () => {
  return (
    <div className="bg-gray-500 w-full text-white px-10 py-12 shadow-3d rounded-b-xl">
      <h1 className="text-6xl pb-4 border-b-2 mb-8">
        <Typewriter
          onInit={(typewriter: any) => {
            const { cursor } = typewriter.state.elements;
            typewriter
              .changeDelay(60)
              .typeString("Contact")
              .pauseFor(900)
              .callFunction(() => cursor.setAttribute("hidden", "hidden"))
              .start();
          }}
        />
      </h1>
      <FormComponent />
    </div>
  );
};

export default Contact;
