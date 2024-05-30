import { getCountries } from '../_entities/country';

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className: string;
};

export default async function SelectCountry(props: SelectCountryProps) {
  const { defaultCountry, name, id, className } = props;
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((country) => (
        <option key={country.name} value={`${country.name}%${country.flag}`}>
          {country.name}
        </option>
      ))}
    </select>
  );
}
