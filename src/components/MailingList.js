import { createPopup } from "@typeform/embed";
import '@typeform/embed/build/css/widget.css';
import { useEffect, useState } from "react";

const MailingList = ({isSubmit, setIsSubmit, setStartMail}) => {
  
  const [form, setForm] = useState();
  const SANDBOX = true;
  
  useEffect(() => {
    if (form) isSubmit ? form.close() : form.open()
  }, [form, isSubmit]);
  
  useEffect(() => {
    setForm(createPopup('jEQBwDKq', {enableSandbox:SANDBOX, onSubmit:() => setIsSubmit(true), onClose:() => setStartMail(false)}));
  },[]);
  
  return null;
}
export default MailingList;