import HeadInfo from "../../components/HeadInfo";
import Image from "next/image";
import photosStyles from "../../styles/Photos.module.css";
import Link from "next/link";

function photos({ photos }) {
  console.log("photos", photos);

  return (
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>My Photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <a>
                  <Image
                    src={photo.thumbnailUrl}
                    width={400}
                    height={300}
                    alt={photo.title}
                  />
                  <h3>{photo.title}</h3>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default photos;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );

  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};
