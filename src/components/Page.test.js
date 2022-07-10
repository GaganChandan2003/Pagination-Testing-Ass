import {remder,fireEvent,screen, render} from '@testing-library/react';
import App from '../App';
import Page from './Page';

describe("Pagination Testing",()=>
{
   
    it("Should check the next button in dom",()=>
    {
          render(<App>Next</App>);
          let next=screen.getByText("Next");
          expect(next).toBeInTheDocument();
    });
    it("Should check the prev button in dom",()=>
    {
        render(<App>Prev</App>);
        let prev=screen.getByText("Prev");
        expect(prev).toBeInTheDocument();
    })
    it("Should check empty button in dom",()=>
    {
        render(<Page></Page>);
        let button = screen.getByTestId("btn");
        expect(button).toBeEmptyDOMElement();
    });
    it("Check the Next function to work",()=>
    {
        let mockfun=jest.fn();
        render(<Page next={mockfun}></Page>);
        const button=screen.getByTestId("btn");
        fireEvent.click(button);
        expect(mockfun).toBeCalled();
    });
    it("Check the Prev function to work",()=>
    {
        let mockfun=jest.fn();
        render(<Page prev={mockfun}></Page>);
        const button=screen.getByTestId("btn");
        fireEvent.click(button);
        expect(mockfun).toBeCalled();
    })
})