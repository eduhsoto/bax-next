import { useRef, useState } from "react";
import sendMailR from "./sendMailR"
import ErrorF from "./ErrorF";
import SucessF from "./SucessF";
import FormC from "./FormC";

export default function SendMail() {
  const [formState, setFormState] = useState({
    sent: false,
    visible: true,
    error: false,
  });

  const onSubmit = async (data) => {
    try {
      let response = await sendMailR(data);
      if(response.message !== true)
      throw new Error("Error interno, intente mas tarde");
      setFormState({ ...formState, sent: true, visible: false });
    } catch (error) {
      console.log(error)
      setFormState({ sent: false, visible: false, error: true });
    }
  };

  return (
    <>
      {formState.sent && <SucessF />}
      {formState.visible && <FormC onSubmit={onSubmit} />}
      {formState.error && <ErrorF />}
    </>
  );
}
