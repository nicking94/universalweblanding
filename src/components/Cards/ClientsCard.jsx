import Link from "next/link";

import Image from "next/image";
import StarRating from "../StarRating/StarRating";

const ClientsCard = ({
  imageSrc,
  name,
  review,
  website,
  websiteText,
}) => {
  return (
    <div className=" flex flex-col w-full space-y-6 min-w-[17rem] p-4 lg:p-10">
      <div className=" flex items-center gap-4">
        <div className=" flex justify-center items-center">
          <Image
            className="w-20 h-20 rounded-full"
            src={imageSrc}
            alt="client"
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
        
        </div>
      </div>
      <StarRating rating={5} />
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
