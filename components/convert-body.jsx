import Image from "next/image";
import parse from "html-react-parser";
import MyLoader from "@/components/my-loader";

export default function ConvertBody({ contentHTML }) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            loader={MyLoader}
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width:768px)768px,100vw"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
}
