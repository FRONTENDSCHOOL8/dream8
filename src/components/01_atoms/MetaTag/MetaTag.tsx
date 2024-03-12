import { Helmet } from 'react-helmet-async';

interface MetaTagListType {
  title: string;
  pageDescription: string;
  keywords: string;
  imgSrc: string;
  path: string;
}

interface MetaTagType {
  metaTag: MetaTagListType;
}

function MetaTag({ metaTag }: MetaTagType) {
  const { title, pageDescription, keywords, imgSrc, path } = metaTag;
  const url = `https://dream8-osxe.vercel.app/${path}`;
  const dreamTitle = `Dream | ${title}`;
  return (
    <Helmet>
      <title>{dreamTitle}</title>

      <meta
        name="description"
        content="Dream은 환경 보호와 사회 공헌을 동시에 실현하는 거래, 중고판매 온라인 플랫폼입니다. 사용하지 않는 옷을 버리는 대신 필요한 사람들에게 판매하고, 판매 수익은 사회 공헌 활동에 기부됩니다."
      />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={dreamTitle} />
      <meta property="og:site_name" content="Dream" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imgSrc} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default MetaTag;
