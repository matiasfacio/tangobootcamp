import { useState } from "react";

function useForm(form: Object = {}) {
  const [formData, setFormData] = useState<any>({});

  function clearForm() {
    const emptyForm = Object.fromEntries(Object.entries(formData).map(([key, value]) => [key,""]));
    return setFormData(emptyForm);
  };

  function handleChange(event: any) {
      let {value, type, name} = event.target

    if (type === 'number') {
        value = parseInt(value); 
    } 

    if (type === 'file') {
        value[0] = event.target.files
    }

    setFormData({
        ...formData,
        [name]: value,
    })
  }

  function resetForm() {
      setFormData(form)
  }

  return {
    formData,
    clearForm,
    handleChange,
    resetForm,
  };
}

export default useForm;
