interface SectionDividerProps {
  title: string;
}

export default function SectionDivider({
  title,
}: SectionDividerProps) {
  return (
    
    <div className="w-full px-8 pt-10 md:px-12">
      <div className="flex items-center gap-5 md:gap-8">
        <div className="h-px flex-1 bg-[#8b1115]/65" />

        <span className="text-xl text-[#8b1115]">✦</span>

        <h2
          className="
            whitespace-nowrap
            text-center
            text-4xl
            font-bold
            leading-none
            text-[#661014]
            md:text-5xl
          "
        >
          {title}
        </h2>

        <span className="text-xl text-[#8b1115]">✦</span>
<div className="h-[10px]" />
        <div className="h-px flex-1 bg-[#8b1115]/65" />
      </div>
    </div>
  );
}