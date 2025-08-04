// components/BackgroundBlobs.tsx
interface Blob {
  className: string;
  color: string;
}

export default function BackgroundBlobs({ blobs }: { blobs: Blob[] }) {
  return (
    <>
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute ${blob.className} ${blob.color} opacity-20 rounded-full blur-3xl -z-10 animate-pulse`}
        />
      ))}
    </>
  );
}
