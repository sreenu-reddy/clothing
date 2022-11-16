import "./form-input.styles.scss";

const FormInput = (props) => {
  const { label, ...otherProp } = props;
  return (
    <div className="group">
      <input className="form-input" {...otherProp}></input>
      {label && (
        <label
          className={`${
            otherProp.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
