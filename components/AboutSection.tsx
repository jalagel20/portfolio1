import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Express" },
  { skill: "React" },
  { skill: "Tailwind CSS" },
  { skill: "Next.js" },
  { skill: "Git" },
  { skill: "Github" },
  { skill: "PostgreSQL" },
  { skill: "Node.js" },
  { skill: "Sequelize" },
  { skill: "Redux" },
  { skill: "Firebase" },
  { skill: "Stripe" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-centner align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Greetings! My name is Jake, a Miami-based software engineer who
              thrives on <span className="font-bold">{"crafting"}</span>{" "}
              crafting creative solutions and{" "}
              <span className="font-bold">{"tackling"}</span> complex
              challenges.
            </p>
            <br />
            <p>
              While pursuing a Biochemistry degree at the University of Miami, I
              discovered my passion for programming just before my final
              semester. This revelation led me to embark on a fulfilling career
              transition into the world of development.
            </p>
            <br />
            <p>
              Outside of coding, I&#39;m an avid golfer, beach goer, and gamer.
              These activities invigorate my imagination and support a
              harmonious work-life balance.
            </p>
            <br />
            <p>
              Embracing the value of{" "}
              <span className="font-bold text-teal-500">
                constant learning and self-enhancement
              </span>
              , I am dedicated to evolving both as a developer and an
              individual. By staying current with cutting-edge technologies and
              prioritizing personal growth, I aim to design ingenious solutions
              that revolutionize the tech landscape.
            </p>
            <br />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              className="hidden md:block md:relative md:bottom-0 md:left-20 md:z-0"
              src="/about-me-image.jpeg"
              alt=""
              width={300}
              height={300}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
