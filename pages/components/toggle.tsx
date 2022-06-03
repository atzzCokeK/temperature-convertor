const Toggle = ({
  isOn,
  onClicked,
}: {
  isOn: boolean;
  onClicked: () => void;
}) => {
  return (
    <div className="flex justify-center">
      <div className="form-check form-switch">
        <input
          className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={isOn}
          onClick={onClicked}
        ></input>
        <label className="form-check-label inline-block text-gray-800 ml-2">
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Toggle;
