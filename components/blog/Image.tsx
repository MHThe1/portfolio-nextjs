import { getStrapiMedia } from "../../lib/media"
import NextImage from "next/image"

interface ImageData {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
      width?: number;
      height?: number;
    }
  }
}

interface ImageProps {
  image: ImageData;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ image, style }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  return (
    <NextImage
      layout="responsive"
      width={width || 100}
      height={height || 100}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      style={style}
    />
  )
}

export default Image