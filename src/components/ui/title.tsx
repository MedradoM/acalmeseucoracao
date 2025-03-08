type TTitle = {
  title: string;
  description?: string;
};

const Title = ({ title, description }: TTitle) => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-lg font-semibold text-default golden">{title}</h1>
      {description && (
        <p className="text-sm text-wrap text-default-golden">{description}</p>
      )}
    </div>
  );
};

export default Title;
