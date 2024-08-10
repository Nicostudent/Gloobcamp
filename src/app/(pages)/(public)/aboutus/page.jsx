import SubTitle from "@/components/Writing/SubTitle.jsx";
import Paragraph from "@/components/Writing/Paragraph.jsx";
import MapUsers from "@/components/UserCard/MapUsers.jsx";

const AboutUs = () => {
  return (
    <section className="space-y-4 py-24">
      <SubTitle>
        A little introduction of Our Project
        <span className="text-primary">.</span>
      </SubTitle>
      <Paragraph>
        In the project we are developing as part of the bootcamp at Globant, we
        are building a learning platform focused on ReactJS and JavaScript. The
        main goal of this platform is to provide users with an interactive
        environment where they can deepen their knowledge of these key
        technologies and self-assess their progress through exercises and
        practical evaluations.
        <br />
        The platform is designed to offer structured content that covers
        everything from fundamental concepts to more advanced topics, allowing
        users to learn at their own pace.
        <br />
        Our team is utilizing technologies such as React, TailwindCSS, and
        Next.js to ensure that the platform is both functional and visually
        appealing, while always adhering to best practices in web development
        and user experience. We are excited about the progress we’re making and
        are committed to creating a tool that truly benefits students on their
        journey to mastering JavaScript
      </Paragraph>
      <SubTitle>
        Our Team<span className="text-primary">.</span>
      </SubTitle>
      <Paragraph>
        Our team consists of a talented and passionate group of frontend
        developers, each with great dedication and experience in creating modern
        and efficient web applications. Here we are:
      </Paragraph>

      <MapUsers />
    </section>
  );
};

export default AboutUs;
