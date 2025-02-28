import { IPost } from "@/app/cases/interfaces/posts.interface";
import { ServiceCard } from "./index";

interface IServiceListProps {
  posts: IPost[];
  sectionTitle: string;
}

function ServicesList(props: IServiceListProps) {
  return (
    <div className="relative mt-20 dark:bg-dm-third bg-lm-primary sm:px-6 lg:px-8 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 dark:bg-dm-third bg-lm-primary sm:h-2/3" />
      </div>

      <div className="relative w-full">
        <div>
          <h2 className="ml-10 text-3xl font-bold tracking-tight dark:text-dm-primary-text text-lm-third-text sm:text-4xl">
            {props.sectionTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10 mt-14 mx-auto lg:max-w-none">
          <ServiceCard />
        </div>

      </div>
    </div>
  );
}

export default ServicesList;
