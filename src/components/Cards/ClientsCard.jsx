import Link from "next/link";

import Image from "next/image";

const ClientsCard = ({
  imageSrc,
  name,
  company,
  review,
  website,
  websiteText,
}) => {
  return (
    <div className=" flex flex-col w-full space-y-6 min-w-[17rem] p-4 lg:p-10">
      <div className=" flex items-center gap-4">
        <div className=" flex justify-center items-center">
          <Image
            className="rounded-[100%] w-20 h-20"
            src={imageSrc}
            alt="client"
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="font-light">{company}</p>
        </div>
      </div>
      <div>
        <p className="text-xs font-light">{review}</p>
      </div>

      <div>
        <p className=" font-normal text-xs text-grayMedium">{name}</p>
        <Link
          href={website}
          className=" underline font-light text-xs text-grayDark"
        >
          {websiteText}
        </Link>
      </div>
    </div>
  );
};
export default ClientsCard;
