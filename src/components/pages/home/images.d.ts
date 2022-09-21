declare module "*.png" {
  const src: string;
  const alt: string;
  export default src | alt;
}
