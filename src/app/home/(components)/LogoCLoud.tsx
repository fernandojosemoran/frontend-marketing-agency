import ReformLogoIcon from "@/app/(shared)/icons/tailwind-logos/ReformLogoIcon";
import SavvycalLogoIcon from "@/app/(shared)/icons/tailwind-logos/SavvycalLogoIcon";
import StatamicLogoIcon from "@/app/(shared)/icons/tailwind-logos/StatamicLogoIcon";
import TransistorLogoIcon from "@/app/(shared)/icons/tailwind-logos/TransistorLogoIcon";
import TupleLogoIcon from "@/app/(shared)/icons/tailwind-logos/TupleLogoIcon";

const LogoCLoud = () => {
  return (
    <div className="bg-lm-primary dark:bg-dm-primary">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-4 flex justify-center md:col-span-2 lg:col-span-1">
            <TupleLogoIcon width={200} height={50}/>
          </div>
          <div className="col-span-2 sm:col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <ReformLogoIcon width={200} height={50}/>
          </div>
          <div className="col-span-2 sm:col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <SavvycalLogoIcon width={200} height={50}/>
          </div>
          <div className="col-span-2 sm:col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <StatamicLogoIcon width={200} height={50}/>
          </div>
          <div className="col-span-2 sm:col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <TransistorLogoIcon width={200} height={50}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCLoud;
