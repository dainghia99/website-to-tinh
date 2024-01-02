"use client";

import { Button } from "@/components/ui/button";
import { useOpenClose } from "@/hooks/use-open-close";
import { useEffect, useState } from "react";
import { Howl } from "howler";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const onOpenClose = useOpenClose();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const sound = new Howl({
    src: ["/audio/vit.mp3"], // Điều chỉnh đường dẫn đến file âm thanh
  });

  const onChange = () => {
    sound.play();
    setX(Math.floor(Math.random() * 200));
    setY(Math.floor(Math.random() * 200));
  };

  const onClick = () => {
    onOpenClose.onOpen();
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/images/anh-nen.jpg")',
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-full"
    >
      <h1 className=" text-2xl font-bold pt-8 text-pink-800 text-center">
        Cảm ơn cậu đã đến bên tớ 🥰
      </h1>
      <p className="font-bold text-pink-800 text-center">
        Cậu chính là người con gái mà tớ yêu thương nhất cuộc đời này 😍
      </p>
      <div className="mt-16 flex justify-center gap-x-4">
        <Button
          className=" cursor-pointer"
          variant="pinkColor"
          onClick={onClick}
          type="button"
        >
          Đồng ý!
        </Button>
        <Button
          onClick={onChange}
          className=" cursor-pointer"
          variant="destructive"
          onMouseOver={onChange}
          type="button"
          style={{ position: "relative", top: `${x}px`, left: `${y}px` }}
        >
          Không
        </Button>
      </div>
    </div>
  );
}
