export default function MyLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
