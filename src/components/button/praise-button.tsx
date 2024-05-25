import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const PraiseButton = ({
  children,
  value,
  praiseValue,
  onClickHandler,
}: {
  children: String;
  praiseValue: Praise;
  value: Praise;
  onClickHandler: Function;
}) => {
  return (
    <Button
      className={cn(
        "capitalize rounded-full bg-slate-200 text-black hover:bg-red-200",
        value == praiseValue && "bg-red-300 hover:bg-red-300"
      )}
      size={"sm"}
      onClick={() => onClickHandler(value)}
    >
      {children}
    </Button>
  );
};

export default PraiseButton;
