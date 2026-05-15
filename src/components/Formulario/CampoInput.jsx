const CampoInput = ({ label, name, type, required }) => (
  <label>
    {label}: 
    <input type={type}   rows="15" name={name} required={required} />
  </label>
);

export default CampoInput;
