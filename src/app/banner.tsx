import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
      <p className="text-sm leading-6 text-white">{text}</p>
      <button
        type="button"
        className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
      >
        <span className="sr-only">Dismiss</span>
        <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </button>
    </div>
  );
}
