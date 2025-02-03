const ClientsCard = () => {
  return (
    <div className="flex flex-col w-full space-y-6 min-w-[17rem] p-2 lg:p-10">
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center bg-slate-200 rounded-full p-4 h-20 w-20">
          <p>img</p>
        </div>
        <div>
          <p className="font-medium">lorem ipsum</p>
          <p className="font-light">lorem ipsum</p>
        </div>
      </div>
      <div>
        <p className="text-xs font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolorum
          ratione sint adipisci deleniti impedit asperiores, optio consectetur
          accusamus ullam? Recusandae dolore sunt incidunt iste ipsum atque
          quisquam voluptatem at. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis sequi blanditiis impedit nisi fugiat minima
          nemo, tempore porro veniam distinctio nihil voluptate ex. Quos atque
          quibusdam fugit nam at ratione.
        </p>
      </div>
      <div>
        <p className=" font-normal text-xs text-grayMedium">Lorem ipsum</p>
        <p className=" font-light text-xs text-grayDark">Lorem ipsum</p>
      </div>
    </div>
  );
};
export default ClientsCard;
