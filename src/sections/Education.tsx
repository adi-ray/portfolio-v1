import * as motion from "motion/react-client";

interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
}

const educationData: EducationItem[] = [
  {
    startDate: "December 2021",
    endDate: "May 2025",
    collegeName: "Indian Institute of Information Technology Vadodara",
    courseName: "B.Tech. in Information Technology",
    address: "Gandhinagar, Gujarat",
  },
  {
    startDate: "2019",
    endDate: "2021",
    schoolName: "Imperial School of Learning",
    address: "Dhanbad, Jharkhand",
    courseName: "Senior Secondary (PCM)",
  },
  {
    startDate: "2007",
    endDate: "2019",
    schoolName: "De Nobili School CMRI",
    address: "Dhanbad, Jharkhand",
    courseName: "Secondary Education (PCMB)",
  },
];

const Education: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-4"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl font-bold"
      >
        Education
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="p-4"
      >
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educationData.map((item, index) => (
            <li
              key={index}
              className={`mb-10 ms-4 ${
                index === educationData.length - 1 ? "mb-0" : ""
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate || "Present"}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.courseName} at {item?.collegeName || item?.schoolName}
              </h3>

              <p className="text-base text-gray-500 dark:text-gray-400">
                {item.address}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </motion.div>
  );
};

export default Education;
