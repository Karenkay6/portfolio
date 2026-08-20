interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div
      className="
        relative
        mx-auto
        min-h-[calc(100dvh-1rem)]
        w-[min(96vw,1500px)]
        overflow-hidden

        rounded-[clamp(1.5rem,3vw,2.75rem)]

        border-[clamp(3px,0.3vw,4px)]
        border-[#8b1115]

        bg-[#fbe7e2]

        shadow-[0_28px_75px_rgba(70,15,18,0.10)]
      "
    >
      {children}
    </div>
  );
}