import { useState } from "react";




const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
     e.preventDefault();


   };

const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }

   
  };
    return (
      <form  onSubmit={handleSubmit}>
        <label >
          Name
          <input
            
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label >
          Number
          <input
           
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button  type="submit">
          Add contact
        </button>
      </form>
    );

};
export default Form;








