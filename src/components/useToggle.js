import React, { useCallback, useState } from "react";

const useToggle = () => {
  const [isTextChanged, setText] = useState(false);

  function setIsTextChanged(){
    setText(!isTextChanged);
  }

  return [isTextChanged, setIsTextChanged]
};
export default useToggle;
