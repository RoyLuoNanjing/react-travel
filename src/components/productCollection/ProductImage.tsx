import React from "react";
import { Image, Typography } from "antd";

interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}
export const ProductImage: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
}) => {
  return (
    <>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        {/* 避免标题太长，故截取前25个字符 */}
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger">¥ {price}</Typography.Text>
      </div>
    </>
  );
};
