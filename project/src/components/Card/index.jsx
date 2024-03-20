import './style.css'


const Card = ({ img, name, info = [], onClick }) => {
  return (
    <article className="card" onClick={onClick}>
      <img className="card__img" src={img} alt={name} />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <ul className="card__list">
          {info.map((el) => (
            <li className="card__item" key={el.title}>
              <b>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Card



