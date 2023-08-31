import React from "react";

type ContentProps = {
  title: string;
  description: string;
  description2?: string;
};

const Content: React.FC<ContentProps> = ({
  title,
  description,
  description2,
}) => (
  <div className="mt-14">
    <h2 className="  text-lg md:text-[22px] font-semibold">{title}</h2>
    <p className="  text-lg md:text-[22px] leading-[35px]  md:leading-[40px]  mt-4  md:mt-8 lg:mt-8">
      {description}
    </p>
    <p className="  text-lg md:text-[22px] leading-[35px]  md:leading-[40px]  mt-4  md:mt-8 lg:mt-8">
      {description2}
    </p>
  </div>
);

const page = () => {
  return (
   ...
  );
};

export default page;
