import PropTypes from "prop-types";
import s from './Statistics.module.css';

function Statistics({ title, stats }) { 
    return (
        <section className={s.statistics}>
 {title && <h2 className={s.title}>{title}</h2>}

  <ul className={s.statList}>
 {stats.map((st) => (
          <li key={st.id}
            className={s.item}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={s.label}>{st.label}</span>
            <span className={s.percentage}>{st.percentage}</span>
          </li>
        ))}
  </ul>
</section>
    );


};  

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}



Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;
