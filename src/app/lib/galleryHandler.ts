/* eslint-disable no-restricted-syntax */
import { Element } from 'html-react-parser';

export default function galleryHandler(element: Element, result: Element[]): void {
  if (element.children.length !== 0) {
    const arrayElement = element.children as Element[];
    arrayElement.forEach((el) => galleryHandler(el, result));
  } else {
    result.push(element);
  }
}
