export default function PageNotFound (): JSX.Element {
  return (
    <div className="page-not-found">
      <h1 className="error-404">404</h1>
      <h2 className="not-found">Page Not Found</h2>
      <button className="go-home"><a href="">GO HOME</a></button>
    </div>
  );
}
