const CallToAction = () => {
  return (
    <div className="bg-gray-50 dark:bg-dm-primary">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-lm-third-text dark:text-dm-primary-text sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600 dark:text-indigo-400">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-lm-primary hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-lm-primary px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
