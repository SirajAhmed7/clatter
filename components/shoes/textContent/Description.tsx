type Props = {
  description: string | undefined;
};

function Description({ description }: Props) {
  return (
    <div className="md:space-y-2 space-y-2">
      <h4 className="heading-h5">Description</h4>
      {/* <p className="body-text !text-lg !leading-[176%] !text-neutral-800">
        {description}
      </p> */}
      <p className="body-text !text-neutral-950">{description}</p>
    </div>
  );
}

export default Description;
