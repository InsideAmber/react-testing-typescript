import {render,screen} from '@testing-library/react'
import { Greet } from './Greet'

// test('Greet renders correctly',()=>{
//     render(<Greet/>)
//     const textElement = screen.getByText(/hello/i) // Ignore the case just match the hello word. 
//     expect(textElement).toBeInTheDocument();
// })

// TDD (Test Driven Development)
/**
 * Test driven development is a software development process where you write tests before
 * writing the software code.
 * Once the test have been written. you then write the code to ensure the test pass.
 * 
 * 1. Create test that verify the functionality of a specific feature.
 * 2. Write software code that will run the tests successfully when re-executed
 * 3. Refactor the code for optimization while ensuring the tests continue to pass.
 * 
 * Also called red-green testing as all tests go from a red failed state to a green passed state.
 */

/**
 * Greet should render the text hello and if name is passed into the component
 * It should render hello followed by the name.
 */

test('Greet renders correctly',()=>{
    render(<Greet/>)
    const textElement = screen.getByText("Hello")  
    expect(textElement).toBeInTheDocument();
})

test('Greet render with a name',()=>{
    render(<Greet name ="Amber"/>)
    const textElement = screen.getByText("Hello Amber")
    expect(textElement).toBeInTheDocument();
})