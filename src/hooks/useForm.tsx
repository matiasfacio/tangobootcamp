import { useState } from "react";

function useForm(initialForm: Object = {}) {
  const [formData, setFormData] = useState<any>(initialForm);

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
        [value] = event.target.files
    }

    setFormData({
        ...formData,
        [name]: value,
    })
  }

  function resetForm() {
      setFormData(initialForm)
  }

  return {
    formData,
    clearForm,
    handleChange,
    resetForm,
  };
}

export default useForm;
