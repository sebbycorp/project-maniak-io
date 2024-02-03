import Link from 'next/link';

type ItemConfig = {
  title: string;
  url?: string;
  isCurrentPage?: boolean;
};

type BreadcrumbsProps = {
  items: ItemConfig[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            {index > 0 && (
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M1.75 10.5L6.25 6L1.75 1.5"
                  stroke="#155EEF"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            <div className="flex items-center">
              {item.url ? (
                <Link
                  href={item.url}
                  className={`ms-1 text-sm font-medium text-primary-link underline underline-offset-2 ${
                    item.isCurrentPage
                      ? 'text-gray-500'
                      : 'hover:text-primary-link md:ms-2 dark:text-primary-link dark:hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              ) : (
                <span
                  className={`ms-1 text-sm font-medium ${
                    item.isCurrentPage
                      ? 'text-gray-500'
                      : 'text-gray-700 hover:text-primary-link md:ms-2 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {item.title}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
