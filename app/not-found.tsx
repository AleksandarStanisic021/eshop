import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <h2 className="font-bold ml-20">Page Not Found!</h2>
      <div className="ml-20">
        <Button variant={"ghost"}>
          <Link href="/">Retun Home</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
