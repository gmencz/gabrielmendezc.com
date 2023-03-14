import { CalendarIcon, EyeIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";

type PostDateProps = {
  date: Date;
};

export function PostDate({ date }: PostDateProps) {
  return (
    <div className="flex gap-2 items-center text dark:text-neutral-400 text-neutral-600">
      <CalendarIcon className="h-4 w-4" />
      <time className="text-sm" dateTime={format(date, "yyyy'-'M'-'d")}>
        {format(date, "do' 'MMMM' 'yyyy")}
      </time>
    </div>
  );
}

type PostViewsProps = {
  views: number;
};

export function PostViews({ views }: PostViewsProps) {
  return (
    <div className="flex gap-2 items-center text dark:text-neutral-400 text-neutral-600">
      <EyeIcon className="h-4 w-4" />
      <span className="text-sm">{views} views</span>
    </div>
  );
}
