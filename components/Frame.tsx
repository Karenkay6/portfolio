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

        w-[calc(100%-clamp(12px,3vw,64px))]
        max-w-[1500px]

        overflow-hidden

        rounded-[clamp(28px,3vw,42px)]

        border-[clamp(3px,0.28vw,4px)]
        border-[#8b1115]

        bg-[#fbe7e2]

        shadow-[0_28px_75px_rgba(70,15,18,0.10)]
      "
    >
      {children}
    </div>
  );
}