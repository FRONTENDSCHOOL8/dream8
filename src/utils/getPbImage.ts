const PB_AP = import.meta.env.VITE_PB_API;

export default function getPbImage(
  collectionId: string,
  id: string,
  photo: string
): string {
  return `${PB_AP}/api/files/${collectionId}/${id}/${photo}`;
}
