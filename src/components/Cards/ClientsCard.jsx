const ClientsCard = ({ name, review }) => {
  return (
    <div className="flex flex-col w-full space-y-2 py-10 lg:py-20 space-x-4">
      <div className="flex items-center gap-4">
        <div>
          <p className="font-semibold text-primaryBlue text-md">{name}</p>
        </div>
      </div>

      <div>
        <p className="text-xs text-primaryBlue">{review}</p>
      </div>
    </div>
  );
};
export default ClientsCard;
