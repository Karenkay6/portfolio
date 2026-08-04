interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div
      className="
        relative
        mx-auto
        my-6
        min-h-[calc(100vh-48px)]
        w-[96%]
        max-w-[1450px]
        overflow-hidden
        rounded-[32px]
        border-[4px]
        border-[#8b1115]
        bg-[#fbe7e2]
        shadow-[0_28px_75px_rgba(70,15,18,0.10)]
      "
    >
      {children}
    </div>
  );
}