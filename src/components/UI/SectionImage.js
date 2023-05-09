import Image from "./Image";

const SectionImage = (props) => {
  return (
    <div className="text-center">
      <Image
        sources={props.sources}
        sizes={props.sizes}
        defaultImg={props.defaultImg}
        imgAlt={props.imgAlt}
      />
    </div>
  );
};

export default SectionImage;
