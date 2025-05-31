import React from "react";

function NextButton() {
  return (
    <div className="absolute -bottom-2 right-0 mt-12">
      <div className="hidden bg-white rounded-2xl p-8 lg:flex gap-4 items-center">
        <label className="switch">
          <input className="checkbox" type="checkbox" />
          <span className="slider round"></span>
        </label>

        <p className="text-[#040404] text-sm w-fit min-w-fit">
          Go to Events page
        </p>
      </div>
    </div>
  );
}

export default NextButton;
