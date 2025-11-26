import type { ReactNode } from "react";

interface DotCardProps {
  children: ReactNode;
}

export default function DotCard({ children }: DotCardProps) {
  return (
    <div className="relative mx-auto h-full w-full rounded-md border border-dashed border-zinc-300 bg-white px-4 sm:px-6 md:px-8 flex flex-col">
      <div className="absolute top-4 left-0 z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8" />
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8" />
      <div className="relative w-full flex-1 flex flex-col border-x border-zinc-400">
        <div className="absolute z-0 grid h-full w-full items-center">
          <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
            <div className="bg-black my-4 size-1 -translate-x-[2.5px] rounded-full ring-8 ring-white sm:my-6 md:my-8" />
            <div className="bg-black my-4 size-1 translate-x-[2.5px] place-self-end rounded-full ring-8 ring-white sm:my-6 md:my-8" />
            <div className="bg-black my-4 size-1 -translate-x-[2.5px] rounded-full ring-8 ring-white sm:my-6 md:my-8" />
            <div className="bg-black my-4 size-1 translate-x-[2.5px] place-self-end rounded-full ring-8 ring-white sm:my-6 md:my-8" />
          </section>
        </div>
        <div className="relative z-20 mx-auto flex-1 flex flex-col py-8">
          <div className="flex-1 flex flex-col p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
