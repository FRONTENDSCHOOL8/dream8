export function getPbImageURL(item, fileName = 'photo'): string {
  const pbUrl = import.meta.env.VITE_PB_URL;

  return `${pbUrl}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
}
