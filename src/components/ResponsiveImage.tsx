"use client";
import { FC, ImgHTMLAttributes } from "react";
import Image from "next/image";

const ResponsiveImage: FC<ImgHTMLAttributes<{}>> = (props) => {
  return (
    <Image
      fill
      {...props}
      width={Number(props.width) ?? 0}
      height={Number(props.width) ?? 0}
      placeholder="blur"
      src={"/black.png" || ""}
      alt={props.alt || ""}
    />
  );
};

export default ResponsiveImage;
