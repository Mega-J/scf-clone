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
    <div className="relative top-24 p-8 xl:top-0 md:p-16 lg:p-24">
      <h2 className="text-3xl md:text-[36px] font-semibold">
       ..
      </h2>
      <p className="  text-lg md:text-[22px] mt-10 lg:mt-14 leading-[35px]  md:leading-[40px]">
        ..
      </p>
      <div className="mt-14">
        
      </div>
      <div className="mt-14">
        <h2 className="  text-lg md:text-[22px] font-semibold">
          2. Use of Information
        </h2>
        <p className="  text-lg md:text-[22px] leading-[40px] mt-8">
          2.1 Personal Information: We may use your personal information to:
        </p>

       
       
       
      </div>

     
      <div>
        
      <div>
        <Content
          title="8. Contact Us"
          description="If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at "
        />
      </div>
    </div>
  );
};

export default page;
