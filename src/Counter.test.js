import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe(Counter, () => {
    it("counter display initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0}/>)
        const countValue = Number(getByTestId('count').textContent);
        expect(countValue).toBe(0)        
    });
    it("count should increment 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
        const incrementBtn = getByRole('button', {name: 'Increase'})
        fireEvent.click(incrementBtn)
        const countValue = Number(getByTestId('count').textContent);
        expect(countValue).toBe(1)        
    })
    it("count should decrement 1 if the decrease button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>)
        const decrementBtn = getByRole('button', {name: 'Decrease'})
        expect(Number(getByTestId('count').textContent)).toBe(0)
        fireEvent.click(decrementBtn)
        expect(Number(getByTestId('count').textContent)).toBe(-1)
      
    })
    it("count should reset to 0 if the reset button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50}/>)
        const resetBtn = getByRole('button', {name: 'Reset'})
        expect(Number(getByTestId('count').textContent)).toBe(50)
        fireEvent.click(resetBtn)
        expect(Number(getByTestId('count').textContent)).toBe(0)   
    })
    it("count number sign should change sign if the changeSign button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={50}/>)
        const changeSignBtn = getByRole('button', {name: 'Change Sign'})
        expect(Number(getByTestId('count').textContent)).toBe(50)
        fireEvent.click(changeSignBtn)
        expect(Number(getByTestId('count').textContent)).toBe(-50)    
    })
});
