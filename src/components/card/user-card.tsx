import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const UserCard = ({ setOpenDialog }: { setOpenDialog: Function }) => {
  return (
    <Card className="p-2 sm:p-4">
      <div className="flex  gap-8">
        <Avatar className="h-16 w-16 sm:h-24 sm:w-24">
          <AvatarImage src="/img/user-1.png" />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="font-bold sm:text-lg">Natty seven</h1>
          <p className="text-slate-400 capitalize font-bold text-sm  sm:text-base">
            developer
          </p>
          <Button
            className="my-2 capitalize bg-yellow-600 rounded-full"
            onClick={() => setOpenDialog(true)}
            size={"sm"}
          >
            add review
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
