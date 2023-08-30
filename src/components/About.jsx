

import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card xs:w-[250px]  "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a versatile developer with expertise in HTML5, CSS, and JavaScript,
        enabling me to craft engaging and dynamic web experiences. My
        proficiency extends to backend technologies like Node.js and Express.js,
        as well as Python and Django. With a knack for UI frameworks such as
        React.js and Bootstrap, I create intuitive user interfaces. I'm
        well-versed in database systems like MySQL and MongoDB, and I deploy on
        platforms like AWS and Heroku. With proficiency in version control using
        Git and a range of development tools, including VS Code and Postman, I
        bring a comprehensive skill set to every project.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
