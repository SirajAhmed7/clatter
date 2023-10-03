type Props = {
  materials:
    | {
        name: string;
        description: string;
      }[]
    | undefined;
  className?: string;
};

function Materials({ materials, className }: Props) {
  return (
    <div className={`space-y-2 ${className ? className : ""}`}>
      <h4 className="heading-h5">Sustainable materials</h4>
      <div className="flex flex-col gap-1">
        {materials &&
          materials.map((material) => (
            <div className="body-text !text-neutral-950" key={material.name}>
              <span className="!font-bold">{material.name}: </span>
              <span>{material.description}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Materials;
