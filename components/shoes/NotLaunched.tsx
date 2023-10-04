type Props = {
  name: string;
};

function NotLaunched({ name }: Props) {
  return (
    <div className="bg-secondary-200 text-center text-lg text-neutral-900 font-display w-full py-2">
      <span className="font-medium">{name}</span> launching soon!
    </div>
  );
}

export default NotLaunched;
