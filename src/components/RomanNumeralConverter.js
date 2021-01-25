import React, {useState} from 'react';
import axios from 'axios';
import Input from '../reusableComponents/Input';
import Button from '../reusableComponents/Button';

const RomanNumeralConverter = () => {

    const [input, setInput] = useState('');
    const [romanNumeral, setRomanNumeral] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const convertNumber = async(e) => {
        e.preventDefault()
        const response = await axios.get(`http://localhost:8080/romannumeral?query=${input}`)
        setRomanNumeral(response.data)
    }

    return (
        <section className="roman-numeral-converter">
            <h1>Really Rad Roman Numeral Converter</h1>
            <form className="roman-numeral-form mb-sm" onSubmit={convertNumber}>
                <Input cb={handleInputChange} styling="mr-sm" type="number"/>
                <Button cb={convertNumber} label="Convert"/>

            </form>
            <section className="roman-numeral">
                <p className="font-lg">{romanNumeral}</p>
            </section>
        </section>
    )
}

export default RomanNumeralConverter;