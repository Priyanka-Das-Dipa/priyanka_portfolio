import { RiHomeOfficeLine } from "react-icons/ri";

const Experience = () => {
  return (
    <div className="px-5 md:px-12 bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
      <div className="pt-28 pb-16">
        <div className="flex gap-3 items-start">
          <span className="w-[10px] h-[40px] bg-gradient-to-r from-[#059bff62] via-[#6549d5] to-[#e33fa1]"></span>
          <span className="text-white">
            Work
            <br className="hidden lg:block" />
            <span>My Working Experience</span>
          </span>
        </div>
        <div className="flex justify-center items-start">
          <div className="py-14">
            <div className="flex items-start justify-center gap-5">
              <div>
                <RiHomeOfficeLine className="text-5xl text-slate-100" />
              </div>
              <div className="text-slate-200">
                <p className="text-2xl font-bold">Miatech.Pro </p>
                <p>Frontend Developer | May, 2024 - August, 2024 (Remote) </p>
                <ul className="list-disc pl-5 py-5">
                  <li>
                    Collaborated with design and backend teams to develop
                    in-house web products, ensuring seamless integration and
                    user-friendly experiences.
                  </li>
                  <li>
                    Worked alongside experienced developers to create dynamic,
                    visually appealing, and interactive applications.
                  </li>
                  <li>
                    Designed, developed, and maintained frontend code for
                    production websites, including redesigns, updates, and
                    performance enhancements.
                  </li>
                  <li>
                    Implemented dynamic web solutions following company
                    standards and best practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
