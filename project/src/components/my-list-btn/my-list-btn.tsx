interface MyListBtnProps {
  onClick: () => void;
  inList: boolean;
  count: number;
}

export default function MyListBtn(props: MyListBtnProps): JSX.Element {
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={props.onClick}
    >
      { props.inList ? (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      ) }
      <span>My list</span>
      <span className="film-card__count">{props.count}</span>
    </button>
  );
}
