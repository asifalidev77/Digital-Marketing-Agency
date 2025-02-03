interface ButtonProps {
    label: string;
  }
export default function ({ label }: ButtonProps) {
    return (
      <>
      <button className="bg-[#2b59ff] hover:bg-black text-white px-[30px] py-[15px] rounded-[5px] text-[15px] font-medium">{label}</button>
      </>
    );
  }
  