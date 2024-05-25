import Rating from "@/components/rating/star-rating";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex items-center justify-center ">
        <Rating />
      </section>
    </main>
  );
}
