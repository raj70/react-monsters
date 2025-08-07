import Card from "../card/card.component";
import "./card-list.styles.css";

export interface ICardListProps {
  monsters: Monster[];
}

const CardList = ({ monsters }: ICardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
