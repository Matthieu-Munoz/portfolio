export function Footer({ data }) {
  return (
    <>
      {data.text}
      <a
        href="https://github.com/Matthieu-Munoz/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.link}
      </a>
      .
    </>
  );
}
