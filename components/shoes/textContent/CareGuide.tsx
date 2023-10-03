type Props = {
  careGuide: string[] | undefined;
  className?: string;
};

function CareGuide({ careGuide, className }: Props) {
  return (
    <div className={`space-y-2 ${className ? className : ""}`}>
      <h4 className="heading-h5">Care guide</h4>
      <ol className="flex flex-col gap-1 body-text !text-neutral-950 list-decimal list-inside">
        {careGuide &&
          careGuide.map((el) => <li key={el.slice(0, 10)}>{el}</li>)}
      </ol>
    </div>
  );
}

export default CareGuide;
