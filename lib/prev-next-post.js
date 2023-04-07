export function prevNextPost(allSlugs, currentSlug) {
  const numberOfWorks = allSlugs.length;

  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  const prevPost = index + 1 === numberOfWorks ? { title: "", slug: "" } : allSlugs[index + 1];

  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];

  return [prevPost, nextPost];
}
