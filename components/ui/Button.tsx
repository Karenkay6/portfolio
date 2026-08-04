type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-full px-8 py-3 transition-all duration-300";

  const primary =
    "bg-[#8FA58B] text-white hover:bg-[#71886D]";

  const secondary =
    "border border-[#8FA58B] text-[#8FA58B] hover:bg-[#8FA58B] hover:text-white";

  return (
    <button
      className={`${base} ${
        variant === "primary"
          ? primary
          : secondary
      }`}
    >
      {children}
    </button>
  );
}