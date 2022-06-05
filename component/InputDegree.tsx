import { ChangeEvent } from "react";

export const InputDegree = ({
  unitName,
  unitSymbol,
  placeHolderValue: defaultValue,
  currentValue,
  onChangeHandler: handler,
}: {
  unitName: string;
  unitSymbol: string;
  placeHolderValue: string;
  currentValue: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col items-start p-2">
      <div className={"text-4xl font-bold mb-4"}>{unitName}</div>
      <div className={"flex"}>
        <input
          className={
            "text-2xl appearance-none bg-transparent border-b-2 border-gray-400 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-sky-400/80 dark:placeholder-white dark:text-white"
          }
          value={currentValue}
          onChange={handler}
          placeholder={defaultValue}
          type={"number"}
        ></input>
        <span className={"text-4xl font-bold"}>{unitSymbol}</span>
      </div>
    </div>
  );
};
