import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nemo
          vel animi deleniti, assumenda ipsa fuga voluptas cumque dolorum error,
          recusandae, nobis qui sequi eos iure eaque dignissimos dolorem ullam?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"}>Read More</Link>
        </CardFooter>
      </Card>
    </main>
  );
}
