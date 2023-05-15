export interface BatchAnnotateImagesResponse {
  responses: AnnotateImageResponse[];
}
export interface AnnotateImageResponse {
  textAnnotations?: EntityAnnotation[];
  fullTextAnnotation?: TextAnnotation;
}
export interface EntityAnnotation {
  locale?: string;
  description?: string;
  boundingPoly?: BoundingPoly;
  locations?: Location[];
  properties?: Property[];
}
export interface TextAnnotation {
  pages?: Page[];
  text?: string;
}
export interface BoundingPoly {
  vertices?: Vertex[];
}
export interface Vertex {
  x?: number;
  y?: number;
}
export interface Page {
  property?: Property;
  width?: number;
  height?: number;
  blocks?: Block[];
  confidence?: number;
}
export interface Property {
  detectedLanguages?: DetectedLanguage[];
}
export interface DetectedLanguage {
  languageCode?: string;
}
export interface Block {
  property?: Property2;
  boundingBox?: BoundingBox;
  paragraphs?: Paragraph[];
  blockType?: string;
  confidence?: number;
}
export interface Property2 {
  detectedLanguages?: DetectedLanguage2[];
}
export interface DetectedLanguage2 {
  languageCode?: string;
}
export interface BoundingBox {
  vertices?: Vertex2[];
}
export interface Vertex2 {
  x?: number;
  y?: number;
}
export interface Paragraph {
  property?: Property3;
  boundingBox?: BoundingBox2;
  words?: Word[];
  confidence?: number;
}
export interface Property3 {
  detectedLanguages?: DetectedLanguage3[];
}
export interface DetectedLanguage3 {
  languageCode?: string;
}
export interface BoundingBox2 {
  vertices?: Vertex3[];
}
export interface Vertex3 {
  x?: number;
  y?: number;
}
export interface Word {
  property?: Property4;
  boundingBox?: BoundingBox3;
  symbols?: Symbol[];
  confidence?: number;
}
export interface Property4 {
  detectedLanguages?: DetectedLanguage4[];
}
export interface DetectedLanguage4 {
  languageCode?: string;
}
export interface BoundingBox3 {
  vertices?: Vertex4[];
}
export interface Vertex4 {
  x?: number;
  y?: number;
}
