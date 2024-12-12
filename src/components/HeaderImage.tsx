import { Image } from "@nextui-org/react";

export default function HeaderImage() {
  return (
    <div>
      <Image
        src="/takeAway.svg"
        alt="Background"
        loading={"lazy"}
        width={1000}
      />
    </div>
  );
}
