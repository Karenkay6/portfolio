interface ContentFrameProps {
  children: React.ReactNode;
}

export default function ContentFrame({
  children,
}: ContentFrameProps) {
  return (
    <div
      className="
        mx-auto
        my-10
        w-full
        max-w-[1150px]
        rounded-[36px]
        border-5
        border-red-800
        bg-white/10
        backdrop-blur-xl
        shadow-[0_30px_80px_rgba(0,0,0,0.08)]
      "
    >
      {children}
    </div>
  );
}