interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div
      className="
        relative
        mx-auto
        min-h-[calc(100vh-12px)]
        w-full
        max-w-[1500px]
        overflow-hidden
        rounded-[28px]
        border-[3px]
        border-[#8b1115]
        bg-[#fbe7e2]
        shadow-[0_28px_75px_rgba(70,15,18,0.10)]

        sm:min-h-[calc(100vh-32px)]
        sm:rounded-[34px]

        lg:min-h-[calc(100vh-64px)]
        lg:rounded-[42px]
        lg:border-[4px]
      "
    >
      {children}
    </div>
  );
}