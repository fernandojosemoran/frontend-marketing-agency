import { CheckIcon } from "@/app/shared/icons";

interface IFeatures {
  name: string;
  description: string;
}

const features: IFeatures[] = [
  {
    name: "Invite team members",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "List view",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Calendars",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Notifications",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Boards",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Reporting",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Mobile app",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
];

export default function Features() {
  return (
    <div className="bg-lm-primary dark:bg-dm-primary">
      <div className="mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-lm-third-text dark:text-dm-primary-text">
            All-in-one platform
          </p>
          <p className="mt-4 text-lg text-lm-primary-text dark:text-dm-secondary-text">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className="absolute h-6 w-6 flex gap-2"
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </div>
                  <p className="ml-9 text-lg font-medium leading-6 text-lm-third-text dark:text-dm-secondary-text">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-lm-primary-text dark:text-dm-third-text">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
