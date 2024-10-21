// service functions
import { getCountries } from '@/app/_lib/services';

const SelectCountry = async ({ defaultCountry, name, id, className }) => {
    const countries = await getCountries();
    const flag = countries.find(country => country.name === defaultCountry)?.flag ?? "";

    return (
        <select
            name={name}
            id={id}
            defaultValue={`${defaultCountry}%${flag}`}
            className={className}
        >
            <option value="">Изаберите земљу...</option>
            {countries?.map(c => (
                <option key={c.name} value={`${c.name}%${c.flag}`}>
                    {c.name}
                </option>
            ))}
        </select>
    )
}

export default SelectCountry;