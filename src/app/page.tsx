"use client";

import ReviewCard from "@/components/card/review-card";
import UserCard from "@/components/card/user-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <main className="flex min-h-screen flex-col  p-8 lg:p-24">
      <section className="flex items-center justify-center ">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="w-[95%] rounded">
            <ReviewCard />
          </DialogContent>
        </Dialog>
        <div className="flex flex-col gap-4">
          <UserCard setOpenDialog={setOpenDialog} />
          <UserCard setOpenDialog={setOpenDialog} />
          <UserCard setOpenDialog={setOpenDialog} />
          <UserCard setOpenDialog={setOpenDialog} />
        </div>
      </section>
    </main>
  );
}
