import ReviewCard from "@/components/card/review-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8 lg:p-24">
      <section className="flex items-center justify-center ">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add review</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ReviewCard />
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
}
