export const Languages = ({ languages }) => {
  const langArray = Object.entries(languages);
  return (
    <div className="languages-container">
      <p>Languages: </p>
      <ul>
        {langArray.map((lang) => {
          return <li key={lang[1]}>{lang[1]}</li>;
        })}
      </ul>
    </div>
  );
};
