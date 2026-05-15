const CampoTextarea = ({ label, name, required }) => (
  <label>
    {label}:
    <textarea name={name} rows="5" required={required}></textarea>
  
  </label>
);

export default CampoTextarea;
