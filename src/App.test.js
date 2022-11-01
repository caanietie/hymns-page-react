import App from './App';
import { render, screen } from '@testing-library/react';

test("the page is in the document", () => {
  render(<App />);
  const hymnContainer = screen.getByTestId("HymnContainer");
  expect(hymnContainer).toBeDefined();
  expect(hymnContainer).toBeVisible();
  expect(hymnContainer).toBeInTheDocument();
  expect(hymnContainer).not.toHaveErrorMessage();
  expect(hymnContainer).not.toBeEmptyDOMElement();
  expect(hymnContainer).toBeInstanceOf(HTMLDivElement);
});

test("heading is in the document", () => {
  render(<App />);
  const h1Element = screen.getByText(/GOSPEL HYMNS AND SONGS/i);
  expect(h1Element).toBeDefined();
  expect(h1Element).toBeVisible();
  expect(h1Element).toBeInTheDocument();
  expect(h1Element).not.toHaveErrorMessage();
  expect(h1Element).not.toBeEmptyDOMElement();
  expect(h1Element).toBeInstanceOf(HTMLHeadingElement);

  const h2Element = screen.getByText(/for church use/i);
  expect(h2Element).toBeDefined();
  expect(h2Element).toBeVisible();
  expect(h2Element).toBeInTheDocument();
  expect(h2Element).not.toHaveErrorMessage();
  expect(h2Element).not.toBeEmptyDOMElement();
  expect(h2Element).toBeInstanceOf(HTMLHeadingElement);
});

test("bakground image is in document", () => {
  render(<App />);
  const header = screen.getByTestId("header");
  expect(header).toHaveAttribute("src");
  expect(header).toHaveAttribute("alt");
  expect(header).toBeInstanceOf(HTMLImageElement);
  expect(header).toHaveAttribute("class", "header");
});

test("expect hymn title and body transition to be in document", () => {
  render(<App />);
  const transition1 = screen.getByTestId("transition1");
  const h1Element = screen.getByText(/GOSPEL HYMNS AND SONGS/i);
  const h2Element = screen.getByText(/for church use/i);
  expect(transition1).toBeInstanceOf(HTMLSpanElement);
  expect(transition1).toContainElement(h1Element);
  expect(transition1).toContainElement(h2Element);

  const transition2 = screen.getByTestId("transition2");
  const searchHymnsGroup = screen.getByTestId("searchHymnsGroup");
  expect(transition2).toBeInstanceOf(HTMLSpanElement);
  expect(transition2).toContainElement(searchHymnsGroup);
});

test("hymn header to be in the document", () => {
  render(<App />);
  const hymnHeader = screen.getByTestId("HymnHeader");
  const header = screen.getByTestId("header");
  const transition1 = screen.getByTestId("transition1");
  const transition2 = screen.getByTestId("transition2");
  expect(hymnHeader).toBeTruthy();
  expect(hymnHeader).toBeVisible();
  expect(hymnHeader).toBeDefined();
  expect(hymnHeader).toBeInTheDocument();
  expect(hymnHeader).toContainElement(header);
  expect(hymnHeader).not.toHaveErrorMessage();
  expect(hymnHeader).not.toBeEmptyDOMElement();
  expect(hymnHeader).toHaveClass("HymnHeader");
  expect(hymnHeader).toContainElement(transition1);
  expect(hymnHeader).toContainElement(transition2);
  expect(hymnHeader).toBeInstanceOf(HTMLDivElement);

  const searchHymnsInput = screen.getByTestId("searchHymnsInput");
  expect(searchHymnsInput).toBeVisible();
  expect(searchHymnsInput).toBeDefined();
  expect(searchHymnsInput).toBeInTheDocument();
  expect(searchHymnsInput).toBeEmptyDOMElement();
  expect(searchHymnsInput).toHaveAttribute("class");
  expect(searchHymnsInput).toHaveAttribute("placeholder");
  expect(searchHymnsInput).toHaveAttribute("type", "text");
  expect(searchHymnsInput).toBeInstanceOf(HTMLInputElement);

  const searchHymnsGroup = screen.getByTestId("searchHymnsGroup");
  expect(searchHymnsGroup).toBeInTheDocument();
  expect(searchHymnsGroup).not.toBeEmptyDOMElement();
  expect(transition2).toContainElement(searchHymnsGroup);
  expect(searchHymnsGroup).toBeInstanceOf(HTMLDivElement);
  expect(searchHymnsGroup).toContainElement(searchHymnsInput);
});

test("select tag to be in the document", () => {
  render(<App />);
  const selectOptions = screen.queryAllByTestId("selectOptions");
  expect(selectOptions.length).toBe(5);
  selectOptions.forEach(option => {
    expect(option).toHaveAttribute("value");
    expect(option).not.toHaveErrorMessage();
    expect(option).not.toBeEmptyDOMElement();
    expect(option).toBeInstanceOf(HTMLOptionElement);
  })
});

test("random hymn is in document", () => {
  render(<App />);
  const randomHymn = screen.getByText(/random hymn/i);
  expect(randomHymn).toBeDefined();
  expect(randomHymn).toBeVisible();
  expect(randomHymn).toBeInTheDocument();
  expect(randomHymn).not.toHaveErrorMessage();
  expect(randomHymn).not.toBeEmptyDOMElement();
  expect(randomHymn).toBeInstanceOf(HTMLLIElement);
});

test("footer to be in the document", () => {
  render(<App />);
  const hymnFooter = screen.getByTestId("HymnFooter");
  expect(hymnFooter).toBeDefined();
  expect(hymnFooter).toBeVisible();
  expect(hymnFooter).toBeInTheDocument();
  expect(hymnFooter).not.toHaveErrorMessage();
  expect(hymnFooter).toHaveAttribute("class");
  expect(hymnFooter).not.toBeEmptyDOMElement();
  expect(hymnFooter).toBeInstanceOf(HTMLDivElement);
});

test("footer child to be in the document", () => {
  render(<App />);
  const hymnFooter = screen.getByTestId("HymnFooter");
  const smallTag = screen.getByText(/developed by/i);
  expect(smallTag).toBeDefined();
  expect(smallTag).toBeVisible();
  expect(smallTag).toBeInTheDocument();
  expect(smallTag).toHaveAttribute("style");
  expect(smallTag).not.toHaveErrorMessage();
  expect(smallTag).not.toBeEmptyDOMElement();
  expect(hymnFooter).toContainElement(smallTag);
});

test("social media handles are in the document", () => {
  render(<App />);
  const socialHandle = screen.getAllByTestId("socialHandle");
  expect(socialHandle.length).toBe(2);
  socialHandle.forEach(handle => {
    expect(handle).toBeDefined();
    expect(handle).toBeVisible();
    expect(handle).toBeInTheDocument();
    expect(handle).toBeEmptyDOMElement();
    expect(handle).toHaveAttribute("src");
    expect(handle).not.toHaveErrorMessage();
    expect(handle).toHaveAttribute("width");
    expect(handle).toHaveAttribute("height");
    expect(handle).toBeInstanceOf(HTMLImageElement);
  });
});